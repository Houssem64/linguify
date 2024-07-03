"use client";

import { UserButton } from "@clerk/nextjs";
import { userAgent } from "next/server";
import { useUser } from "@clerk/nextjs";
const ProfileAvatar = () => {


    const { user } = useUser();

    return (
        <>
            <UserButton />
            <span className="font-bold px-2 mx-2">{user?.firstName + ' ' + user?.lastName} </span>
        </>
    );
}

export default ProfileAvatar;