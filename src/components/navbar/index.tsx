import Dropdown from 'components/dropdown';
import Image from 'next/image';
import avatar from '/public/img/avatars/avatar4.png';

const Navbar = () => {

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

      <Dropdown
        button={
          <Image
            width="2"
            height="20"
            className="h-10 w-10 rounded-full"
            src={avatar}
            alt="Elon Musk"
          />
        }
        classNames={'py-2 top-8 -left-[180px] w-max'}
      >
        <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500">
          <div className="ml-4 mt-3">
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                👋 Hey, Adela
              </p>{' '}
            </div>
          </div>
          <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

          <div className="ml-4 mt-3 flex flex-col">
            <a
              href=" "
              className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
            >
              Profile Settings
            </a>
            <a
              href=" "
              className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
            >
              Newsletter Settings
            </a>
            <a
              href=" "
              className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
            >
              Log Out
            </a>
          </div>
        </div>
      </Dropdown>
    </nav>
  );
};

export default Navbar;
