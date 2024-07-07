"use client";
import { Badge } from "@/components/ui/badge"

import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Button } from '../ui/button';
import ImageUpload from '../inputs/ImageUpload';

function PaymentEdinar() {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState('');
    const [user, setUser] = useState("");

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const response = await fetch("/api/user", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                setUser(data.user);
            } catch (error) {
                console.error("Error fetching current user:", error);
            }
        }
        fetchCurrentUser();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // First, upload the image


            const imageUrl = image // Assuming the API returns the URL of the uploaded image

            // Then, save the payment proof
            const saveProofResponse = await axios.post('/api/save-payment-proof', {
                imageUrl,
                user,
            });

            if (saveProofResponse.status === 201) {
                toast.success("Payment proof uploaded and saved successfully.");
            }

        } catch (error) {
            toast.error("Failed to upload and save payment proof. Please try again.");
            console.error("Error uploading and saving payment proof:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.success("Copied to clipboard");
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
                toast.error("Failed to copy");
            });
    }
    return (
        <form className="max-w-lg  p-6 shadow-md rounded-md" onSubmit={handleSubmit}>
            <motion.div className="mx-auto items-center text-center" animate={{ scale: [0, 1] }} transition={{ delay: 0.25 }}>
                <h1 className="text-2xl font-semibold text-center mb-4">Upload Proof of Payment </h1>
                <Badge className="mb-4 text-xl mx-auto  items-center text-center justify-center"><span onClick={() => copyToClipboard("25 658 485")}> 25 658 485</span>
                </Badge>
                <ImageUpload value={image} onChange={(value) => setImage(value)} />
                <Button
                    type="submit"
                    className="mt-4 w-full py-2 px-4 bg-white text-black font-semibold rounded-md hover:bg-gray-700 transition duration-300"
                    disabled={isLoading}
                >
                    {isLoading ? 'Uploading...' : 'Upload'}
                </Button>
            </motion.div>
        </form >
    );
}

export default PaymentEdinar;