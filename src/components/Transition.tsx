/* "use client";

import { motion } from "framer-motion";

export default function Transition({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{ y: 0, opacity: 0, width: "0", height: "0" }}

            animate={{ y: 0, opacity: 1, }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="overflow-auto h-full"

        >
            {children}
        </motion.div >
    );
} */