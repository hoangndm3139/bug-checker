"use client"
import Image from "next/image";
import { IoAlertCircleOutline, IoEllipsisVertical, IoImages } from "react-icons/io5";
import { FaImages } from "react-icons/fa";
import Link from "next/link";
import { Avatar, Checkbox } from "@nextui-org/react";
import { useState } from "react";

function Feedback() {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <div className="bg-white h-[69px] border-b border-[#D5D9DE80] p-4 flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <Checkbox isSelected={isSelected} onValueChange={setIsSelected} />
                <Image alt="ic_prj" src="/img/ic_mock_project.png" width={30} height={30} />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-6 h-6 text-tiny" />
                <span className="font-medium">Testing project</span>
            </div>

            <div className="flex gap-[14px]">
               
            </div>
            <div className="flex items-center gap-3">

            </div>
        </div>);
}

export default Feedback;