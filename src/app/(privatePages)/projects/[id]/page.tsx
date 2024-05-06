'use client'
import { Button } from "@nextui-org/react";
import InputField from "components/fields/InputField";
import Feedback from "components/privatePages/feedback";
import Image from "next/image";

function ProjectDetail({ params }: { params: { id: string } }) {
    return (
        <div className="pl-5 pr-[25px] pt-4 h-full bg-white">
            <div className="flex w-full justify-between items-center gap-3">
                <InputField
                    id="search"
                    placeholder="Search Feedback..."
                    onChange={() => {
                        console.log(123);
                    }}
                    extra="flex-1"
                />
                <Button startContent={<Image src={"/svg/ic_export.svg"} alt={"ic_export"} width={25} height={25} />} className="bg-white border" >Export</Button>
            </div>

            <div className='mt-[31px]'>
                <Feedback />
            </div>
        </div>
    );
}

export default ProjectDetail;