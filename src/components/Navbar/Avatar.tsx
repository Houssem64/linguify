"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const ProfileAvatar = () => {
    return (
        <Avatar className="mr-0 ml-auto">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>);
}

export default ProfileAvatar;
