const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between py-3 mx-auto">
      <span className="text-center text-sm text-gray-600 sm:!mb-0 md:text-base">
        ©{new Date().getFullYear()} Horizon UI. All Rights Reserved.
      </span>
    </div>
  );
};
export default Footer;
