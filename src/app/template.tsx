"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{
                y: 20, opacity: 0, height: "0vh"
            }}

            animate={{
                y: 0, opacity: 1, height: "99vh"
            }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="overflow-auto h-full"
        >
            {children}
        </motion.div >
    );
}