'use client';
import { Button, Input } from '@nextui-org/react';
import Default from 'components/auth/variants/DefaultAuthLayout';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function SignInDefault() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const pathname = usePathname()

  return (
    <Default>
      <div className="w-full flex flex-col items-center max-w-[560px] bg-[#F1F5F9] pt-9 pb-6 px-10 rounded-[20px]">
        <div className='flex flex-col items-center w-full gap-5'>
          <span className='text-[23px] font-medium'>Login to your account</span>
          <div className='flex flex-col gap-[26px] w-full mt-[38px]'>
            <Input
              type="email"
              label="Email"
              variant="bordered"
              labelPlacement={"outside"}
              placeholder="Enter your email"
              classNames={{
                label: "text-[#383330] text-lg font-medium",
                inputWrapper: [
                  "bg-white",
                ],
              }}
            />
            <Input
              label="Password"
              variant="bordered"
              labelPlacement={"outside"}
              placeholder="Enter your password"
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <AiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              classNames={{
                label: "text-[#383330] text-lg font-medium",
                inputWrapper: [
                  "bg-white",
                ],
              }}
            />
          </div>
        </div>
        <Button aria-label="sign-up" className='w-full bg-[#D94B3B] text-white mt-14 h-14'>Sign up</Button>
        <div className='bg-[#b0b5b9] h-[62px] w-full rounded-[51px] mt-12 flex'>
          <Link href={"/auth/login"} className={`${pathname.includes("login") ? "bg-[#D94B3B] text-white" : "bg-[#b0b5b9] text-[#383330]"} rounded-[51px]  flex-1 flex justify-center items-center`}>Login</Link>
          <Link href={"/auth/sign-up"} className={`${pathname.includes("sign-up") ? "bg-[#D94B3B] text-white" : "bg-[#b0b5b9] text-[#383330]"} rounded-[51px]  flex-1 flex justify-center items-center`}>Sign up</Link>
        </div>
      </div>
    </Default>
  );
}

export default SignInDefault;
