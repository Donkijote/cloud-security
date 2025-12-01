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
        className=" w-full object-cover h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] xl:h-[600px]"
      />

      {children && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/50 to-transparent">
          <div className="mx-auto flex h-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mt-auto flex flex-col gap-3 pb-10">{children}</div>
          </div>
        </div>
      )}
    </section>
  );
};
