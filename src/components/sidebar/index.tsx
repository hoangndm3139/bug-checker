'use client';

import { useEffect, useRef } from 'react';
import { HiX } from 'react-icons/hi';
import { IRoute } from 'types/navigation';
import Links from './components/Links';

function SidebarHorizon(props: { routes: IRoute[];[x: string]: any }) {
  const { routes, open, setOpen } = props;
  const ref = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setOpen(false)
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`sm:none min-w-[250px] duration-175 linear flex min-h-full flex-col pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white ${open ? 'translate-x-0' : '-translate-x-96 xl:translate-x-0'}`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={() => setOpen(false)}
      >
        <HiX size={24} />
      </span>

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>
    </div>
  );
}

export default SidebarHorizon;
