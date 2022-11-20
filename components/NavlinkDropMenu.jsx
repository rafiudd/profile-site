import { Menu, Transition } from '@headlessui/react'
import { IoMenu } from 'react-icons/io5'
export default function NavlinkDropMenu() {
    return (
        <Menu as="div" className="text-left relative block xs:hidden">
            <div>
                <Menu.Button
                    className="cursor-pointer p-2 rounded-lg bg-[#d1d5db] hover:ring-[2px] ring-black dark:ring-white  dark:bg-[#444444] transition-all"
                    aria-label="menu"
                >
                    <IoMenu className="h-5 w-5" />
                </Menu.Button>
            </div>
            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-zinc-400 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-zinc-400 dark:divide-zinc-700">
                    <div className="py-1 ">
                        <div className="px-3 py-1 uppercase font-mplus font-bold text-xs">Navigation</div>
                    </div>
                    {/* {NavLinks.map((links) => (
                        <DropdownMenuItem href={links.url}>{links.title}</DropdownMenuItem>
                    ))} */}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}