'use client';

import InputField from '../../../components/fields/InputField';
import Project from '../../../components/privatePages/project';

const Dashboard = () => {
  return (
    <div className='pl-5 pr-[25px] pt-4 h-full relative '>
      <InputField
        id="search"
        placeholder="Search projects..."
        onChange={() => {
          console.log(123);
        }} />
      <div className='flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <span className='text-[32px] font-medium text-gray-600'>
          No Data Show
        </span>
        <span className='text-xl font-medium text-gray-600'>
          Tap the Create Dashboard button to get feedback from your project
        </span>
      </div>
      <div className='mt-[31px]'>
        <Project />
      </div>
    </div>
  );
};

export default Dashboard;
