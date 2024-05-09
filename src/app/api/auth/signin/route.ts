import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';


const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }

    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Handle successful sign-in here
        res.status(200).json({ message: 'Sign-in successful' });
    } catch (error) {
        // Handle error here
        res.status(500).json({ message: 'An error occurred' });
    }
}
/* 
// pages/api/auth/signin.ts
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'; // Adjust the import path according to your setup
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            console.error('Missing required fields');
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        // Handle successful sign-in here
        return NextResponse.json({ message: 'Sign-in successful' });
    } catch (error) {
        // Handle error here
        console.error(error);
        return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
    }
} */