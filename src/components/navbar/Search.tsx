"use client";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components";

const Search = () => {
    return (
        <div className="w-96">
            <Input
                type="text"
                placeHolder="Search"
                leftIcon={<CiSearch size={20} />}
                onChange={() => ""}
                name="Search"
            />
        </div>
    );
};

export default Search;
