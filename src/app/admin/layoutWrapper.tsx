'use client';

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@nextui-org/modal";
import { Button, useDisclosure } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from 'components/header';
import Sidebar from 'components/sidebar';
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlinePlus } from "react-icons/ai";
import routes from 'routes';
import InputField from "../../components/fields/InputField";
import subRoutes from "../../subRoutes";
import { getPathFromPathname, isNestedRoute } from "../../utils/navigation";

const queryClient = new QueryClient()

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { id, feedbackId } = useParams();

  return (
    <div className="flex flex-col h-screen w-full bg-[#F1F5F9] dark:bg-background-900">
      <Header />
      <div className='bg-white h-[69px] pl-[70px] pr-[27px] flex justify-between items-center'>
        {isNestedRoute(pathname, id) ? <SubNavBar /> : <MainNavBar />}
      </div>
      <div className="font-dm flex-1">
        <main className="h-full w-full">
          <div className='flex gap-2 h-full'>
            <div className={`${feedbackId && 'hidden'}`}>
              <Sidebar routes={isNestedRoute(pathname, id) ? subRoutes : routes} open={open} setOpen={setOpen} variant="admin" />
            </div>
            <div className='flex-1 bg-[#F8FAFC]'>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const MainNavBar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const pathname = usePathname();

  return (
    <>
      <p className='font-semibold text-xl'>Control Centre</p>
      <Button aria-label="create" onPress={onOpen} color='primary' startContent={<AiOutlinePlus color='white' />}>Create {pathname.includes("projects") ? "Project" : "Dashboard"}</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        style={{ backgroundColor: "#F6F9FC" }}
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center text-[#475569] font-bold text-2xl">Create New Project</ModalHeader>
              <ModalBody>
                <InputField
                  id="project_name"
                  label="Project Name"
                  placeholder="My Project"
                  className="bg-white border-[#F4F4F4] mt-3"
                  onChange={() => {
                    console.log(123);
                  }} />

                <InputField
                  id="website"
                  label="Website"
                  placeholder="https://myclientsite.com/"
                  className="bg-white border-[#F4F4F4] mt-3"
                  description="Address of the website you’ll be testing"
                  onChange={() => {
                    console.log(123);
                  }} />
              </ModalBody>
              <ModalFooter>
                <Button aria-label="create-project" className="w-full" color="primary" onPress={onClose}>
                  Create project
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

const SubNavBar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const pathname = usePathname();

  return (
    <>
      <div className="flex gap-6">
        <Link href={`/${getPathFromPathname(pathname)}`}>
          <div className="h-10 w-16 bg-white border flex items-center justify-center rounded-xl"><AiOutlineLeft /></div>
        </Link>
        <div className="flex gap-[14px]">
          <Image alt="ic_prj" src="/img/ic_mock_project.png" width={30} height={30} />
          <div className="flex flex-col">
            <span className="text-[#1E293B] font-medium">Client_web_bug_check</span>
            <span className="text-[#818991] text-xs">choicefabricsofficial.com</span>
          </div>
        </div>
      </div>
      <Button aria-label="invite" onPress={onOpen} className="bg-white border" >Invite</Button>
    </>
  )
}