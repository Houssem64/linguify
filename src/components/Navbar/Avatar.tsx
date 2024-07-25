"use client";

import { UserButton } from "@clerk/nextjs";
import { userAgent } from "next/server";
import { useUser } from "@clerk/nextjs";
const ProfileAvatar = () => {


    const { user } = useUser();

    return (
        <>
            <UserButton />

        </>
    );
}

export default ProfileAvatar;