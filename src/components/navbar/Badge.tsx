import React from "react";

interface Props {
    icon: React.ReactNode;
    notification: number;
    color: string;
}

const Badge = ({ icon, notification, color }: Props) => {
    return (
        <div className="relative">
            {icon}
            <div
                style={{
                    backgroundColor: `${color}`,
                }}
                className={`h-4 w-4 rounded-full absolute -top-1 left-4 flex justify-center items-center text-[10px] font-bold text-white`}
            >
                {notification}
            </div>
        </div>
    );
};

export default Badge;
