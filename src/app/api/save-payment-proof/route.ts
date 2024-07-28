import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma'; // Adjust this import based on your Prisma client location

export async function POST(req: Request) {
    try {
        const { imageUrl, user } = await req.json();

        // Validate input
        if (!imageUrl || !user || !user.id || !user.firstName || !user.lastName || !user.phoneNumbers) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Save the payment proof to the database
        const paymentProof = await prisma.paymentProof.create({
            data: {
                imageUrl,
                userId: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                phoneNumber: user.phoneNumbers[0]?.phoneNumber || '',
                email: user.emailAddresses[0]?.emailAddress || '',
            },
        });

        return NextResponse.json({ message: 'Payment proof saved successfully', paymentProof }, { status: 201 });
    } catch (error) {
        console.error('Error saving payment proof:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}