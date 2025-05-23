"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


declare global {
    var cloudinary: any;
}
interface ImageUploadProps {
    onChange: (value: string) => void;
    value: string;
}


const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {

    const handleUpload = useCallback((result: any) => { onChange(result.info.secure_url) }, [onChange]);


    return (<CldUploadWidget
        onUpload={handleUpload}
        uploadPreset="ml_default"
        options={{
            maxFiles: 1,
        }}
    >
        {({ open }) => {
            return (
                <div
                    onClick={() => open?.()}
                    className="relative cursor-pointer bg-gray-800 hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600  "
                >
                    <AddPhotoAlternateIcon />
                    <div className="font-semibold text-lg">
                        Click to Upload
                    </div>
                    {
                        value && (
                            <div className="absolute inset-0 w-full h-full">
                                <Image src={value} alt="upload" style={{ objectFit: 'cover' }} fill />
                            </div>
                        )
                    }

                </div>
            )
        }}
    </CldUploadWidget>



    );
}

export default ImageUpload;