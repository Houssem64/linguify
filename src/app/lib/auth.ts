

import { NextAuthOptions, User, getServerSession } from "next-auth";
import bcrypt from 'bcrypt';

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import React from "react";

import prisma from "./prisma";



export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) return null;

                const dbUser = await prisma.user.findFirst({
                    where: { email: credentials.email },
                });

                // Verify Password with bcrypt
                if (dbUser && await bcrypt.compare(credentials.password, dbUser.password)) {
                    const { password, createdAt, id, ...dbUserWithoutPassword } = dbUser;
                    return { id: dbUser.id, dbUserWithoutPassword } as User;
                }

                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    given_name: profile.given_name,

                };
            },
        })


    ],


    /*  callbacks: {
         async session({ session, user }) {
             const userFromDb = await prisma.user.findUnique({
                 where: { id: user.id },
             });
             if (userFromDb) {
                 session.user.id = userFromDb.id;
                 session.user.verified = userFromDb.verified; // Include verified field
             }
             return session;
         },
     }, */


};

