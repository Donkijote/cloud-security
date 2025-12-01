import type { ReactNode } from "react";

import { clsx } from "clsx";

type HeroProps = {
  imageSrc: string;
  imageAlt?: string;
  children?: ReactNode;
};

export const Hero = ({ imageSrc, imageAlt = "", children }: HeroProps) => {
  return (
    <section
      className={clsx(
        "absolute inset-x-0 top-0 w-full overflow-hidden bg-slate-900/80",
      )}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className=" w-full object-cover h-[420px] lg:h-[520px] xl:h-[600px]"
      />

      {children && (
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      )}
    </section>
  );
};
