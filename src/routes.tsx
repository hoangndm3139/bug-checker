import Image from 'next/image';

const routes = [
  {
    name: 'Projects',
    path: 'projects',
    icon: <Image
      src="/svg/ic_projects.svg"
      width={25}
      height={25}
      alt="ic_projects"
    />,
  },
  {
    name: 'Dashboard',
    path: 'dashboard',
    icon: <Image
      src="/svg/ic_monitor.svg"
      width={25}
      height={25}
      alt="ic_monitor"
    />,
  },
];
export default routes;
