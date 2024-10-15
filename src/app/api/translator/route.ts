import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { auth } from "@clerk/nextjs/server";;

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const data = await req.json();
        const translator = await prisma.translator.upsert({
            where: { userId },
            update: data,
            create: { ...data, userId },
        });

        return NextResponse.json(translator);
    } catch (error) {
        console.error('Error updating translator profile:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const translator = await prisma.translator.findUnique({
            where: { userId },
        });

        return NextResponse.json(translator || {});
    } catch (error) {
        console.error('Error fetching translator profile:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}