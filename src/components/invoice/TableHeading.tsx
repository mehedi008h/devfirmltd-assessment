import { Column } from "@/components";

const TableHeading = () => {
    const headings = [
        {
            name: "Invoice No.",
            sort: true,
            col: "col-span-1",
        },
        {
            name: "Trip",
            sort: true,
            col: "col-span-1",
        },
        {
            name: "Inv. Date",
            col: "col-span-1",
        },
        {
            name: "Inv. Amount",
            col: "col-span-1",
        },
        {
            name: "Bal. Due",
            col: "col-span-1",
        },
        {
            name: "Payment Method",
            col: "col-span-2",
        },
        {
            name: "Due Date",
            col: "col-span-1",
        },
        {
            name: "Status",
            col: "col-span-1",
        },
        {
            name: "Action",
            sort: true,
            col: "col-span-1",
        },
    ];
    return (
        <div className="py-3 border-y border-gray-200 grid grid-cols-10 ps-2">
            {/* table head column  */}
            {headings.map((heading) => (
                <Column
                    key={heading.name}
                    head
                    name={heading.name}
                    col={heading.col}
                    sort={heading.sort}
                />
            ))}
        </div>
    );
};

export default TableHeading;
