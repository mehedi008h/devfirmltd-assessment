"use client";

interface Props {
    title: string;
    subtitle: string;
    children?: React.ReactNode;
}

const Heading = ({ title, subtitle, children }: Props) => {
    return (
        <div className="flex justify-between items-center my-3">
            <div>
                <h1 className="text-2xl text-[#3B3E44] font-semibold">
                    {title}
                </h1>
                <p className="text-gray-400 text-base">{subtitle}</p>
            </div>
            {children}
        </div>
    );
};

export default Heading;
