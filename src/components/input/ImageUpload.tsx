"use client";
import { ChangeEventHandler } from "react";
import { BsUpload } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

interface Props {
    avatar?: string;
    uploadAvatar: ChangeEventHandler<HTMLInputElement>;
    setAvatar: (url: string) => void;
    label: string;
}

const ImageUpload = ({ avatar, uploadAvatar, setAvatar, label }: Props) => {
    const removeImage = () => {
        setAvatar("");
    };
    return (
        <div className="flex flex-col gap-1">
            {/* input label  */}
            {label && (
                <h3 className="font-semibold text-base text-[#3B3E44]">
                    {label}
                </h3>
            )}
            <label htmlFor="avatar">
                <div
                    className={`relative cursor-pointer ${
                        !avatar && "border-dashed border-2 border-blue-500"
                    } flex items-center justify-center gap-3 text-blue-500 w-[186px] h-[121px]`}
                >
                    <input
                        type="file"
                        id="avatar"
                        accept="iamges/*"
                        className="hidden"
                        onChange={uploadAvatar}
                    />
                    <BsUpload size={25} />
                    <h3 className="text-sm font-medium">
                        Upload <br />
                        Plane image
                    </h3>
                    {avatar && (
                        <div className="absolute rounded-lg">
                            <div className="w-[186px] h-[121px] relative group transition-all">
                                <img
                                    className="w-full h-full object-cover rounded-lg"
                                    src={avatar}
                                    alt="House"
                                />
                                <div
                                    onClick={removeImage}
                                    className="w-6 h-6 bg-gray-300 z-10 rounded-full flex justify-center items-center absolute -top-2 -right-2 text-black hover:text-red-500 transition-all"
                                >
                                    <RxCross2 />
                                </div>
                                <div className="absolute w-[186px] h-[121px] bg-gray-800 bg-opacity-50 top-0 hidden group-hover:flex justify-center items-center rounded-lg transition-all">
                                    <h3 className="text-sm font-medium text-white">
                                        Change
                                    </h3>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </label>
        </div>
    );
};

export default ImageUpload;
