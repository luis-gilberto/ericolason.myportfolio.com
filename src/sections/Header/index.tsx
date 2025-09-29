import { Logo } from "@/sections/Header/components/Logo";
import { DesktopNavigation } from "@/sections/Header/components/DesktopNavigation";

export const Header = () => {
  return (
    <header className="relative box-border caret-transparent px-[5%] py-[30px] md:p-0 after:accent-auto after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-sans_serif">
      <Logo />
      <div className="box-border caret-transparent float-right w-[68.5%]">
        <DesktopNavigation />
      </div>
    </header>
  );
};
