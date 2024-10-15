"use client"
import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';

interface TranslatorProfile {
    name: string;
    title: string;
    location: string;
    wordRate: number;
    languages: { id: number; name: string; level: string }[];
    translationPairs: { id: number; from: string; to: string }[];
    specializations: { id: number; name: string }[];
    education: { id: number; degree: string; institution: string; year: number }[];
    certifications: { id: number; name: string; institution: string; year: number }[];
}

const dummyProfile: TranslatorProfile = {
    name: '',
    title: 'Translator',
    location: 'City, Country',
    wordRate: 0.10,
    languages: [
        { id: 1, name: 'English', level: 'Native' },
        { id: 2, name: 'Spanish', level: 'Fluent' },
    ],
    translationPairs: [
        { id: 1, from: 'English', to: 'Spanish' },
        { id: 2, from: 'Spanish', to: 'English' },
    ],
    specializations: [
        { id: 1, name: 'General' },
        { id: 2, name: 'Technical' },
    ],
    education: [
        { id: 1, degree: 'Bachelor in Translation', institution: 'University Name', year: 2020 },
    ],
    certifications: [
        { id: 1, name: 'Certified Translator', institution: 'Certification Body', year: 2021 },
    ],
};

const ProfileEditPage: React.FC = () => {
    const { user } = useUser();
    const [profile, setProfile] = useState<TranslatorProfile | null>(null);
    const { register, control, handleSubmit, reset } = useForm<TranslatorProfile>();

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await fetch('/api/profile');
            if (response.ok) {
                const data: TranslatorProfile = await response.json();
                setProfile(data);
                reset(data);
            } else if (response.status === 404) {
                // If profile not found, use dummy data
                setProfile(dummyProfile);
                reset(dummyProfile);
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
            // If there's an error, also use dummy data
            setProfile(dummyProfile);
            reset(dummyProfile);
        }
    };

    const onSubmit = async (data: TranslatorProfile) => {
        try {
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const updatedProfile: TranslatorProfile = await response.json();
                setProfile(updatedProfile);
                alert('Profile updated successfully!');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Please try again.');
        }
    };

    if (!profile) return <div>Loading...</div>;

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#14a800] p-6 text-white">
                    <h1 className="text-3xl font-bold">Edit Profile</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="p-6">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <Input {...register('name')} defaultValue={profile.name || user?.fullName || ''} className="mt-1" />
                    </div>
                    {/* ... rest of the form fields ... */}

                    <Button type="submit" className="bg-[#14a800] text-white">Save Changes</Button>
                </form>
            </div>
        </div>
    );
};

export default ProfileEditPage;