import { NextResponse } from 'next/server';
import { auth } from "@clerk/nextjs/server";
import prisma from '@/app/lib/prisma';

export async function GET() {
    const { userId } = auth();

    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const profile = await prisma.translator.findUnique({
            where: { userId },
            include: {
                languages: true,
                translationPairs: true,
                specializations: true,
                education: true,
                certifications: true,
            },
        });

        if (!profile) {
            return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
        }

        return NextResponse.json(profile);
    } catch (error) {
        console.error('Error fetching profile:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    const { userId } = auth();

    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const data = await req.json();

        const updatedProfile = await prisma.translator.upsert({
            where: { userId },
            update: {
                name: data.name,
                title: data.title,
                location: data.location,
                wordRate: parseFloat(data.wordRate),
                languages: {
                    deleteMany: {},
                    create: data.languages.map((lang: any) => ({
                        name: lang.name,
                        level: lang.level,
                    })),
                },
                translationPairs: {
                    deleteMany: {},
                    create: data.translationPairs.map((pair: any) => ({
                        from: pair.from,
                        to: pair.to,
                    })),
                },
                specializations: {
                    deleteMany: {},
                    create: data.specializations.map((spec: any) => ({
                        name: spec.name,
                    })),
                },
                education: {
                    deleteMany: {},
                    create: data.education.map((edu: any) => ({
                        degree: edu.degree,
                        institution: edu.institution,
                        year: parseInt(edu.year),
                    })),
                },
                certifications: {
                    deleteMany: {},
                    create: data.certifications.map((cert: any) => ({
                        name: cert.name,
                        institution: cert.institution,
                        year: parseInt(cert.year),
                    })),
                },
            },
            create: {
                userId,
                name: data.name,
                title: data.title,
                location: data.location,
                wordRate: parseFloat(data.wordRate),
                languages: {
                    create: data.languages.map((lang: any) => ({
                        name: lang.name,
                        level: lang.level,
                    })),
                },
                translationPairs: {
                    create: data.translationPairs.map((pair: any) => ({
                        from: pair.from,
                        to: pair.to,
                    })),
                },
                specializations: {
                    create: data.specializations.map((spec: any) => ({
                        name: spec.name,
                    })),
                },
                education: {
                    create: data.education.map((edu: any) => ({
                        degree: edu.degree,
                        institution: edu.institution,
                        year: parseInt(edu.year),
                    })),
                },
                certifications: {
                    create: data.certifications.map((cert: any) => ({
                        name: cert.name,
                        institution: cert.institution,
                        year: parseInt(cert.year),
                    })),
                },
            },
            include: {
                languages: true,
                translationPairs: true,
                specializations: true,
                education: true,
                certifications: true,
            },
        });

        return NextResponse.json(updatedProfile);
    } catch (error) {
        console.error('Error updating profile:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}