export const MobileMenuToggle = () => {
  return (
    <div className="absolute box-border caret-transparent block translate-y-[-50.0%] px-[5%] py-[30px] right-0 top-2/4 md:hidden md:transform-none">
      <div className="relative box-border caret-transparent w-6">
        <i className="italic bg-black box-border caret-transparent block h-0.5 mb-1 md:bg-transparent"></i>
        <i className="italic bg-black box-border caret-transparent block h-0.5 mb-1 md:bg-transparent"></i>
        <i className="italic bg-black box-border caret-transparent block h-0.5 md:bg-transparent"></i>
      </div>
    </div>
  );
};
