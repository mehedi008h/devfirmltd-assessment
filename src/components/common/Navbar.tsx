import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Badge, Search } from "@/components";

const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center  h-16 bg-white rounded-lg p-3">
            <Search />
            <div className="flex items-center gap-4">
                <Badge
                    icon={<BiMessageRoundedDetail size={25} />}
                    color="#72ADD7"
                    notification={3}
                />
                <Badge
                    icon={<IoMdNotificationsOutline size={25} />}
                    color="#F8BB54"
                    notification={4}
                />

                <div className="flex items-center gap-1">
                    <div className="h-11 w-11 rounded-full bg-black"></div>
                    <IoIosArrowDown className="text-gray-500" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
