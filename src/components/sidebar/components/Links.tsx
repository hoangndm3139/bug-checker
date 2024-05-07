/* eslint-disable */
import DashIcon from 'components/icons/DashIcon';
import NavLink from 'components/link/NavLink';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { IoChevronForwardSharp } from 'react-icons/io5';

export const SidebarLinks = (props: { routes: RoutesType[] }): JSX.Element => {
  const pathname = usePathname();
  const { routes } = props;

  const activeRoute = useCallback(
    (routeName: string) => {
      return (pathname?.includes(routeName));
    },
    [pathname],
  );

  const createLinks = (routes: RoutesType[]) => {
    return routes.map((route, index) => {
      return (
        <NavLink key={index} href={route.path}>
          <div className="relative flex hover:cursor-pointer">
            <li
              className={`flex w-full justify-between cursor-pointer items-center py-2 px-4 rounded-[6px] ${(activeRoute(route.path)) && ' bg-white'}`}
              key={index}
            >
              <div className='flex'>
                <span>
                  {route.icon ? route.icon : <DashIcon />}{' '}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${(activeRoute(route.path))
                    ? 'font-bold text-navy-700'
                    : 'font-medium text-gray-600'
                    }`}
                >
                  {route.name}
                </p>
              </div>
              <IoChevronForwardSharp />
            </li>
          </div>
        </NavLink>
      );
    });
  };
  // BRAND
  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
