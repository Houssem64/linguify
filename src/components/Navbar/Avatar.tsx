/* "use client";


const ProfileAvatar = () => {
    return (
        <Avatar >
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>);
}

export default ProfileAvatar;
 */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession } from 'next-auth/react';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import Box from '@mui/material/Box';
const ProfileAvatar = () => {
    const { data: session, status } = useSession();
    const [imageLoaded, setImageLoaded] = useState(false);

    if (status === "loading") {
        return (<Avatar >
            <AvatarImage />
            <Box sx={{ display: 'flex', transition: 'ease-in' }}>
                <CircularProgress />
            </Box>
        </Avatar>);
    }


    return (
        <>
            <Avatar >
                {session && session.user && session.user.image ? (
                    <>
                        <AvatarImage src={session.user.image} className={`transition animate-in ${imageLoaded ? 'image-loaded' : ''}`} alt="Profile"

                            onLoad={() => setImageLoaded(true)}
                        />


                    </>
                ) : (
                    <AvatarFallback>NA</AvatarFallback>
                )}

            </Avatar>
            <div className="flex justify-center items-center pt-2 ml-3"> {session?.user?.name}</div>

        </>
    );
}

export default ProfileAvatar;