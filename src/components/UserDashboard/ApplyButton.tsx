import Link from "next/link";
import { motion } from "framer-motion";
const ApplyButton = () => {
    return (
        <Link href="#">
            <motion.button className="bg-white   justify-center items-center text-center  hover:bg-gray-400 text-black  py-2 px-4  rounded" whileTap={{ scale: 0.85 }} whileHover={{ scale: 1.2 }} initial={{ x: 0, y: 0, translateY: -500 }} > Apply to get access Now  </motion.button>
        </Link>
    );
}

export default ApplyButton;