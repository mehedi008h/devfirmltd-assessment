"use client";
import { GoHome } from "react-icons/go";
import { PiPhoneCall } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { GiHoneyJar, GiWineGlass } from "react-icons/gi";
import { BsAirplaneEngines, BsCalendar3 } from "react-icons/bs";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TiGroupOutline } from "react-icons/ti";
import { TbUsersGroup } from "react-icons/tb";
import { FaRegFolderClosed } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import {
    FiArrowLeftCircle,
    FiArrowRightCircle,
    FiLogOut,
} from "react-icons/fi";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const [toogle, setToogle] = useState(true);
    const handleToogle = () => setToogle(!toogle);

    const pathname = usePathname();

    const routes = [
        {
            path: "/",
            name: "Dashboard",
            icon: <GoHome size={22} />,
        },
        {
            path: "/reservations",
            name: "Reservations",
            icon: <PiPhoneCall size={22} />,
        },
        {
            path: "/trips",
            name: "Trips",
            icon: <GiHoneyJar size={22} />,
            subRoutes: true,
        },
        {
            path: "/invoice",
            name: "Invoices",
            icon: <LiaFileInvoiceSolid size={22} />,
        },
        {
            path: "/planes",
            name: "Planes",
            icon: <BsAirplaneEngines size={22} />,
            subRoutes: true,
        },
        {
            path: "/amenities",
            name: "Amenities",
            icon: <GiWineGlass size={22} />,
            subRoutes: true,
        },
        {
            path: "/contacts",
            name: "Contacts",
            icon: <HiOutlineUserGroup size={22} />,
        },
        {
            path: "/team",
            name: "Team",
            icon: <TbUsersGroup size={22} />,
        },
        {
            path: "/crew-members",
            name: "Crew Members",
            icon: <TiGroupOutline size={22} />,
        },
        {
            path: "/files",
            name: "Files",
            icon: <FaRegFolderClosed size={22} />,
        },
        {
            path: "/messages",
            name: "Messages",
            icon: <BiMessageRoundedDetail size={22} />,
        },
        {
            path: "/calendar",
            name: "Calendar",
            icon: <BsCalendar3 size={22} />,
        },
        {
            path: "/setting",
            name: "Setting",
            icon: <AiOutlineSetting size={22} />,
        },
    ];

    // Define the animation properties
    const sidebarAnimation = useSpring({
        width: toogle ? "300px" : "80px",
        delay: 10,
    });

    return (
        <animated.div
            style={sidebarAnimation}
            className={`bg-[#383FE1] py-6 rounded-lg relative `}
        >
            <div
                onClick={handleToogle}
                className="h-6 w-6 bg-[#9C9FEF] rounded-full flex justify-center items-center absolute right-2 top-2"
            >
                {toogle ? (
                    <FiArrowLeftCircle color="white" />
                ) : (
                    <FiArrowRightCircle color="white" />
                )}
            </div>
            {/* logo */}
            <div className="text-center relative">
                <h1
                    className="text-3xl"
                    style={{
                        color: "rgba(255, 255, 255, 0.50)",
                    }}
                >
                    {toogle ? "Logo" : "L"}
                </h1>
            </div>
            {/* links  */}
            <div
                className={`${
                    toogle ? "ps-7" : "ps-2"
                } mt-7 flex flex-col gap-2 transition-all`}
            >
                {routes.map((route) => (
                    <Link key={route.name} href={route.path}>
                        <div
                            className={`flex justify-between items-center h-12 text-gray-400 hover:bg-[#F1F5F9] hover:bg-opacity-[0.1] hover:text-white ps-5 rounded-l-full cursor-pointer ${
                                pathname === route.path ? "active" : ""
                            }`}
                        >
                            <div className="flex items-center gap-3 transition-all">
                                {route.icon}
                                {toogle && (
                                    <h3 className="text-base">{route.name}</h3>
                                )}
                            </div>
                            {/* sub route  */}
                            {toogle && (
                                <>
                                    {route.subRoutes && (
                                        <div className="pr-4">
                                            <IoIosArrowDown />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </Link>
                ))}
                <div className="flex justify-between h-12 items-center text-white hover:bg-[#F1F5F9] hover:bg-opacity-[0.1] hover:text-white ps-5 rounded-l-full mt-2">
                    <div className="flex items-center gap-3">
                        <FiLogOut />
                        {toogle && <h3 className="text-base">Logout</h3>}
                    </div>
                </div>
            </div>
        </animated.div>
    );
};

export default Sidebar;
