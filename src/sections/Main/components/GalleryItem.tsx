export type GalleryItemProps = {
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  linkVariant: string;
  hasOverlay?: boolean;
  overlayText?: string;
};

export const GalleryItem = (props: GalleryItemProps) => {
  return (
    <a
      href={props.href}
      className={`relative text-blue-700 box-border caret-transparent block w-full md:w-1/5 ${props.linkVariant}`}
    >
      <div className="relative box-border caret-transparent overflow-hidden mt-[0%] mb-[2%] mx-0 md:ml-[0.5%] md:mr-[0%] md:mb-[0.5%]">
        <div className="relative box-border caret-transparent overflow-hidden">
          <div
            className={`relative box-border caret-transparent w-full mx-auto before:accent-auto before:caret-transparent before:text-blue-700 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:pb-[50%] before:border-separate before:font-sans_serif ${props.hasOverlay ? "after:accent-auto after:bg-black after:caret-transparent after:text-blue-700 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:opacity-0 after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-sans_serif after:md:opacity-65" : ""}`}
          >
            <div
              className={`absolute bg-no-repeat bg-cover box-border caret-transparent min-h-full w-full overflow-hidden bg-center left-0 top-0 ${props.hasOverlay ? "md:grayscale-[1]" : ""}`}
            >
              <img
                src={props.imageSrc}
                alt={props.imageAlt || ""}
                sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 5)"
                className="absolute box-border caret-transparent h-[calc(100%_+_2px)] object-cover translate-x-[-50.0%] translate-y-[-50.0%] align-top w-[calc(100%_+_2px)] left-2/4 top-2/4 font-object_fit_cover"
              />
            </div>
          </div>
        </div>
      </div>
      {props.hasOverlay && props.overlayText && (
        <div className="absolute box-border caret-transparent h-full max-w-full opacity-0 translate-x-[-50.0%] w-full pt-[2.5%] pb-[0%] left-2/4 top-0 md:opacity-100">
          <div className="relative items-center box-border caret-transparent flex h-full w-full">
            <div className="box-border caret-transparent w-full overflow-hidden pl-[4%] pr-[2.5%] py-[0%] after:accent-auto after:caret-transparent after:clear-both after:text-blue-700 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-sans_serif">
              <div className="text-white text-sm font-bold box-border caret-transparent clear-both float-left leading-[14px] text-left w-full pl-[0%] pr-[1%] pt-1 font-jqgg md:text-xl md:leading-5 md:pt-0.5">
                {props.overlayText}
              </div>
            </div>
          </div>
        </div>
      )}
    </a>
  );
};
