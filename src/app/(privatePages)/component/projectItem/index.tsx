import Image from "next/image";
import { IoAlertCircleOutline, IoEllipsisVertical, IoImages } from "react-icons/io5";
import { FaImages } from "react-icons/fa";

function ProjectItem() {
    return (
        <div className="bg-white h-[69px] border border-[#D5D9DE80] p-4 flex justify-between">
            <div className="flex gap-[14px]">
                <Image alt="ic_prj" src="/img/ic_mock_project.png" width={30} height={30} />
                <div className="flex flex-col">
                    <span className="text-[#1E293B] font-medium">Client_web_bug_check</span>
                    <span className="text-[#818991] text-xs">choicefabricsofficial.com</span>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <FaImages color="gray" className="w-5 h-5" />
                <p>0</p>
                <div className="w-[2px] h-[2px] bg-gray-600 border-full" />
                <IoAlertCircleOutline color="gray" className="w-5 h-5" />
                <p>0 Open</p>
                <IoEllipsisVertical color="gray" />
            </div>
        </div>);
}

export default ProjectItem;