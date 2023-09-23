"use client";
import React from "react";
import { TiArrowUnsorted } from "react-icons/ti";

interface Props {
    col: string;
    name?: string | number;
    sort?: boolean;
    head?: boolean;
    justify?: string;
    children?: React.ReactNode;
    textColor?: string;
}

const Col = ({
    col,
    name,
    sort,
    head = false,
    justify = "justify-center",
    children,
    textColor,
}: Props) => {
    return (
        <div
            className={`${col} flex gap-1 items-center ${justify} pr-2 w-full`}
        >
            {children ? (
                // if column have node
                <>{children}</>
            ) : (
                <>
                    {/* if column just have text  */}
                    <h3
                        className={`${
                            head
                                ? `font-semibold text-base ${
                                      textColor ? textColor : "text-[#3B3E44]"
                                  } `
                                : "font-medium text-sm text-[#84878B]"
                        } `}
                    >
                        {name}
                    </h3>
                    {sort && <TiArrowUnsorted size={12} />}
                </>
            )}
        </div>
    );
};

export default Col;
