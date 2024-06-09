import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function POST(req: Request) {
    {
        const body = await req.json();
        const { cardNumber, name, cvv, email, expirationMonth, expirationYear } = body;


        const result = await prisma.$transaction([
            prisma.payment.create({
                data: {
                    cardNumber: cardNumber,
                    name: name,
                    cvv: cvv,
                    email: email,
                    expirationMonth: expirationMonth,
                    expirationYear: expirationYear,
                },
            }),
        ]);

        return NextResponse.json(result);

    }
}