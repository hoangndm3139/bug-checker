import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
const Header = () => {
  return (
    <nav className="flex flex-row flex-wrap xl:items-center justify-between rounded-xl p-2">
      <div className="ml-[6px] flex flex-col-reverse xl:flex-row  xl:w-fit">
        <div className='flex'>
          <Image src="/svg/ic_logo.svg" alt="ic_logo" width={36} height={36} />
          <p className="font-bold text-[32px] capitalize text-black">
            BUGKAPTURE
          </p>
        </div>
      </div>
      <UserButton afterSignOutUrl='/auth/login'/>
    </nav>
  );
};

export default Header;
