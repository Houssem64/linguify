// pages/api/auth/signup.ts
import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma'; // Adjust the import path according to your setup
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const userData = body;


        if (!userData?.email || !userData?.password || !userData?.name) {
            console.error('Missing required fields');
        }


        const duplicate = await prisma.user.findUnique({
            where: {
                email: userData.email,
            },
        });
        if (duplicate) {
            return NextResponse.json({ message: 'User already exists' }, { status: 409 });
        }
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;
        await prisma.user.create({
            data: userData,
        });
        return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
    } catch (error) {
        console.error('Signup error:', error);
        return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
    }
}




/* export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email, password, name } = req.body;

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
    }

    try {
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create the user with the hashed password and name
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            },
        });

        // Optionally, remove or mask sensitive information before sending the user object back


        res.status(200).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
} */