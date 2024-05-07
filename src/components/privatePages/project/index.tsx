import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaImages } from "react-icons/fa";
import { IoAlertCircleOutline, IoEllipsisVertical } from "react-icons/io5";

function Project() {
  const pathname = usePathname();

    return (
        <div className="bg-white h-[69px] border border-[#D5D9DE80] p-4 flex justify-between items-center">
            <div className="flex gap-[14px]">
                <Image alt="ic_prj" src="/img/ic_mock_project.png" width={30} height={30} />
                <div className="flex flex-col">
                    <Link href={`${pathname}/1`} className="text-[#1E293B] font-medium">Client_web_bug_check</Link>
                    <span className="text-[#818991] text-xs">choicefabricsofficial.com</span>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <FaImages color="gray" className="w-5 h-5" />
                <p>0</p>
                <div className="w-[2px] h-[2px] bg-gray-600 border-full" />
                <IoAlertCircleOutline color="gray" className="w-5 h-5" />
                <p>0 Open</p>
                <Dropdown
                    classNames={{
                        content: "min-w-[136px]",
                    }}>
                    <DropdownTrigger>
                        <Button isIconOnly aria-label="more" className="bg-white">
                            <IoEllipsisVertical color="gray" className="w-4 h-4" />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new" showDivider>Delete</DropdownItem>
                        <DropdownItem key="copy" >Copy link</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>);
}

export default Project;