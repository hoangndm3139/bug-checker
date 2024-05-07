import { useRef } from 'react';
import { IRoute } from 'types/navigation';
import Links from './components/Links';

function SidebarHorizon(props: { routes: IRoute[];[x: string]: any }) {
  const { routes, } = props;
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className={`sm:none min-w-[250px] duration-175 linear flex min-h-full flex-col pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white`}
    >
      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>
    </div>
  );
}

export default SidebarHorizon;
