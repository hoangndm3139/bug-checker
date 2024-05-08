'use client';
import { useSignUp } from '@clerk/nextjs';
import { Button, Input, Spinner } from '@nextui-org/react';
import Default from 'components/auth/variants/DefaultAuthLayout';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function SignUp() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const pathname = usePathname()
  const { isLoaded, signUp, setActive } = useSignUp();
  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);
  const router = useRouter()
  const [codes, setCodes] = useState<string[]>(['', '', '', '', '', ''])

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value
    const newCodes = [...codes]
    newCodes[index] = value
    setCodes(newCodes)

    if (value && index < 5) {
      const nextInput = document.getElementById(`code-input-${index + 1}`)
      if (nextInput) {
        nextInput.focus()
      }
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && !codes[index]) {
      const prevInput = document.getElementById(`code-input-${index - 1}`)
      if (prevInput) {
        prevInput.focus()
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        username,
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setIsLoading(false)
      setPendingVerification(true);
    } catch (err: any) {
      setIsLoading(false)
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onPressVerify = async (e) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: codes.join("")
      });
      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId })
        router.push("/auth/login");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };


  return (
    <Default>

      <div className="w-full flex flex-col items-center max-w-[560px] bg-[#F1F5F9] pt-9 pb-6 px-10 rounded-[20px]">
        {!true ? (
          <>
            <div className='flex flex-col items-center w-full gap-5'>
              <span className='text-[23px] font-medium'>Create your account</span>
              <div className='flex flex-col gap-[26px] w-full mt-[38px]'>
                <Input
                  type="username"
                  label="UserName"
                  variant="bordered"
                  labelPlacement={"outside"}
                  placeholder="Enter your first and last name"
                  classNames={{
                    label: "text-[#383330] text-lg font-medium",
                    inputWrapper: [
                      "bg-white",
                    ],
                  }}
                  value={username}
                  onValueChange={setUsername}
                />
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
                  value={emailAddress}
                  onValueChange={setEmailAddress}
                />
                <Input
                  label="Password"
                  variant="bordered"
                  labelPlacement={"outside"}
                  placeholder="Enter your password"
                  value={password}
                  onValueChange={setPassword}
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
            <Button aria-label="sign-up" isLoading={isLoading} spinner={<Spinner size='sm' color='danger' />} className='w-full bg-[#D94B3B] text-white mt-14 h-14' onClick={handleSubmit}>Sign up</Button>

            <div className='bg-[#b0b5b9] h-[62px] w-full rounded-[51px] mt-12 flex'>
              <Link href={"/auth/login"} className={`${pathname.includes("login") ? "bg-[#D94B3B] text-white" : "bg-[#b0b5b9] text-[#383330]"} rounded-[51px]  flex-1 flex justify-center items-center`}>Login</Link>
              <Link href={"/auth/sign-up"} className={`${pathname.includes("sign-up") ? "bg-[#D94B3B] text-white" : "bg-[#b0b5b9] text-[#383330]"} rounded-[51px]  flex-1 flex justify-center items-center`}>Sign up</Link>
            </div>
          </>
        ) :
          <div className='flex flex-col gap-8 justify-center items-center'>
            <div className='flex flex-col items-center'>
              <span>Please check your email for verification code sent to</span>
              <span className='font-semibold'>{emailAddress}</span>
            </div>
            <span>Enter code</span>
            <div className='flex gap-2'>
              {[...Array(6)].map((_, index) => (
                <Input
                  key={index}
                  id={`code-input-${index}`}
                  maxLength={1}
                  variant="bordered"
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  classNames={{
                    label: "text-[#383330] text-lg font-medium",
                    inputWrapper: [
                      "bg-white",
                      "w-12",
                      "h-12"
                    ],
                  }}
                />
              ))}
            </div>
            <Button aria-label="verify-email" isLoading={isLoading} spinner={<Spinner size='sm' color='danger' />} className='w-full bg-[#D94B3B] text-white h-14' onClick={onPressVerify}>Verify</Button>
          </div>}

      </div>

    </Default>
  );
}

export default SignUp;
