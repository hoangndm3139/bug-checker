import Image from "next/image";

function Default({ children }) {
  return (
    <div className="relative flex">
      <div className="mx-auto flex min-h-full h-screen w-full flex-col justify-between md:max-w-[75%]">
        <div className="mb-auto flex flex-col pl-5 pr-5 md:pl-12 md:pr-0 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
          <div className="flex h-screen w-full">
            <div className="flex flex-col w-full items-center justify-center gap-2">
              <div className='flex justify-center'>
                <Image src="/svg/ic_logo.svg" alt="ic_logo" width={48} height={48} />
                <p className="font-bold text-[32px] capitalize text-black">
                  BUGKAPTURE
                </p>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Default;
