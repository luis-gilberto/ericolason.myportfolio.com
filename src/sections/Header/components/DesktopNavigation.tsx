export const DesktopNavigation = () => {
  return (
    <nav className="box-border caret-transparent hidden float-left max-w-full text-left w-full pt-0 px-0 md:block md:pt-[11px] md:px-[0%]">
      <div className="box-border caret-transparent inline-block align-middle pr-1">
        <a
          href="/projects"
          className="text-neutral-900 text-xs font-semibold box-border caret-transparent leading-7 uppercase font-jqgg"
        >
          Full Map Archive
        </a>
      </div>
      <div className="box-border caret-transparent inline-block align-middle pl-[11px] pr-3.5">
        <a
          href="http://www.artpal.com/wallartmaps"
          className="text-xs font-semibold box-border caret-transparent leading-7 uppercase font-jqgg hover:text-neutral-500 hover:border-neutral-500"
        >
          WALL ART MAPS
        </a>
      </div>
      <div className="box-border caret-transparent inline-block align-middle">
        <a
          href="/about-me"
          className="text-xs font-semibold box-border caret-transparent leading-[60px] uppercase font-jqgg hover:text-neutral-500 hover:border-neutral-500"
        >
          BIOGRAPHY
        </a>
      </div>
      <div className="box-border caret-transparent inline-block align-middle pl-[11px] pr-3.5">
        <a
          href="http://www.exploretheworldmaps.com/portfolio.html"
          className="text-xs font-semibold box-border caret-transparent leading-7 uppercase font-jqgg hover:text-neutral-500 hover:border-neutral-500"
        >
          OTHER GRAPHIC DESIGN
        </a>
      </div>
      <div className="box-border caret-transparent inline-block align-middle pl-[11px]">
        <a
          href="mailto://ericolason@gmail.com"
          className="text-xs font-semibold box-border caret-transparent leading-7 uppercase font-jqgg hover:text-neutral-500 hover:border-neutral-500"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};
