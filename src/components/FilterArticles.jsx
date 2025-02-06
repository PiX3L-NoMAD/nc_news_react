import { Menu, MenuButton, MenuItems, MenuItem, Transition } from "@headlessui/react";
import { Fragment } from "react";

const FilterArticles = ({ sortBy, order, onSortByChange }) => {
    const options = [
        { label: "DATE PUBLISHED (Newest to Oldest)", value: "created_at-desc" },
        { label: "DATE PUBLISHED (Oldest to Newest)", value: "created_at-asc" },
        { label: "VOTES (Highest to Lowest)", value: "votes-desc" },
        { label: "VOTES (Lowest to Highest)", value: "votes-asc" },
        { label: "COMMENTS (Most to Least)", value: "comment_count-desc" },
        { label: "COMMENTS (Least to Most)", value: "comment_count-asc" },
    ];

    return (
        <Menu as="div" className="relative inline-block text-left sm:justify-items-start justify-items-center ">
            <MenuButton className="bg-gradient-to-r from-pink-700 to-purple-600 hover:bg-gradient-to-l hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-md shadow-md font-semibold flex items-center justify-between w-64">
                Sort by: {options.find(opt => opt.value === `${sortBy}-${order}`)?.label || ""}
                <span className="ml-2">&#9662;</span>
            </MenuButton>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-500"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <MenuItems className="absolute w-64 bg-white shadow-lg rounded-md mt-2 border border-gray-200 z-10 ">
                    {options.map(({ label, value }) => (
                        <MenuItem key={value} as={Fragment}>
                            <button
                                className="group px-4 py-2 w-full text-left hover:bg-violet-100 focus:bg-orange-100 transition-colors"
                                onClick={() => {
                                    const [sortByChoice, orderChoice] = value.split("-");
                                    onSortByChange(sortByChoice, orderChoice);
                                }}
                            >
                                {label}
                            </button>
                        </MenuItem>
                    ))}
                </MenuItems>
            </Transition>
        </Menu>
    );
};

export default FilterArticles;