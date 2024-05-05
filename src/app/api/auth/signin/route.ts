import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        res.status(200).json({ message: 'Sign-in successful' });
    }

    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Implement your session creation or JWT token generation here
        // For simplicity, we're just returning a success message
        res.status(200).json({ message: 'Authentication successful' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}