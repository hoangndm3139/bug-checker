"use client"
import { Avatar, Button, Checkbox, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Select, SelectItem, SelectSection } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";

const statusOptions: {
    label: string;
    value: string;
    iconPath: string;
    color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}[] = [
        { label: "Open", value: "open", iconPath: "/svg/ic_warning_circle.svg", color: "danger" },
        { label: "Close", value: "close", iconPath: "/svg/ic_success.svg", color: "success" },
    ];

function Feedback() {
    const [isSelected, setIsSelected] = useState(false);
    const [status, setStatus] = useState("open");
    const pathname = usePathname();
    console.log(pathname);
    

    return (
        <div className="bg-white h-[69px] border-b border-[#D5D9DE80] p-4 flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <Checkbox isSelected={isSelected} onValueChange={setIsSelected} />
                <Image alt="ic_prj" src="/img/ic_mock_project.png" width={30} height={30} />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-6 h-6 text-tiny" />
                <Link className="font-medium" href={`${pathname}/2`}>Testing project</Link>
            </div>
            <div className="flex gap-[25px] items-center">
                <div className="flex gap-[17px]">
                    <div className="flex gap-1">
                        <Image alt="ic_error" src="/svg/ic_error.svg" width={21} height={21} />
                        <span>1</span>
                    </div>
                    <div className="flex gap-1">
                        <Image alt="ic_warning" src="/svg/ic_warning.svg" width={21} height={21} />
                        <span>1</span>
                    </div>
                </div>
                <div className="min-w-[120px]">
                    <Select
                        color={statusOptions.find((s) => s.value === status)?.color}
                        items={statusOptions}
                        defaultSelectedKeys={["open"]}
                        onChange={(event) => setStatus(event.target.value)}
                        renderValue={(items) => {
                            return items.map((item) => (
                                <div key={item.key} className="flex items-center gap-2">
                                    <Image alt={"ic_status"} src={statusOptions.find((s) => s.value === item.key).iconPath} width={21} height={21} />
                                    <span>{item.textValue}</span>
                                </div>
                            ));
                        }}>
                        <SelectSection title="Change status">
                            {statusOptions.map((s) => (
                                <SelectItem key={s.value} textValue={s.label}>
                                    <div className="flex gap-2 items-center">
                                        <Image alt={"ic_status"} src={s.iconPath} width={16} height={16} />
                                        <span className="text-small">{s.label}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectSection>
                    </Select>
                </div>

                <div className="min-w-20">
                    <span className="text-[#626262] text-sm font-medium">10 min ago</span>
                </div>

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

export default Feedback;