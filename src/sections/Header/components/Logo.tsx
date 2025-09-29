export const Logo = () => {
  return (
    <div className="box-border caret-transparent float-left w-full md:w-[31.5%]">
      <div className="box-border caret-transparent float-left max-w-full w-full pb-0 px-0 md:w-[52%] md:pb-[17px] md:px-[0%] after:accent-auto after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-sans_serif">
        <div className="text-neutral-900 text-[23px] font-bold box-border caret-transparent clear-both float-left leading-[21px] mb-[-5px] mt-[-5px] max-w-full break-words text-left w-full pl-0 pr-[39px] pt-0 font-jqgg md:text-[40px] md:leading-[22px] md:max-w-[1000px] md:my-0 md:pt-[11px] md:px-[0%]">
          <a
            href="/projects"
            className="text-[23px] box-border caret-transparent inline-block leading-[21px] max-w-full break-words md:text-[40px] md:leading-[22px]"
          >
            <img
              src="https://c.animaapp.com/mfkf6vqgFr6eyt/assets/309.jpg"
              alt="Eric Olason"
              className="text-[23px] box-border caret-transparent leading-[21px] max-h-[100px] max-w-full break-words align-top md:text-[40px] md:leading-[22px] md:max-h-none"
            />
          </a>
        </div>
      </div>
      <div className="absolute box-border caret-transparent block translate-y-[-50.0%] px-[5%] py-[30px] right-0 top-2/4 md:hidden md:transform-none">
        <div className="relative box-border caret-transparent w-6">
          <i className="italic bg-black box-border caret-transparent block h-0.5 mb-1 md:bg-transparent"></i>
          <i className="italic bg-black box-border caret-transparent block h-0.5 mb-1 md:bg-transparent"></i>
          <i className="italic bg-black box-border caret-transparent block h-0.5 md:bg-transparent"></i>
        </div>
      </div>
    </div>
  );
};
