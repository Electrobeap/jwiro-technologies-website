import Image, { type ImageProps } from "next/image";

import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

type LogoVariant = "lockup" | "mark";

type BrandLogoProps = Omit<
  ImageProps,
  "alt" | "height" | "src" | "width"
> & {
  variant?: LogoVariant;
};

const logoAssets = {
  lockup: {
    height: 548,
    src: siteConfig.logo,
    width: 528
  },
  mark: {
    height: 512,
    src: siteConfig.logoMark,
    width: 512
  }
} as const;

export function BrandLogo({
  className,
  variant = "lockup",
  ...props
}: BrandLogoProps) {
  const asset = logoAssets[variant];

  return (
    // Served through the image optimizer: the source lockup is a ~220KB PNG
    // rendered at 80–170px, so shipping it unoptimized on every page was a
    // large and pointless cost. The optimizer keeps the alpha channel and
    // emits a losslessly resized PNG, so the wordmark stays crisp.
    <Image
      alt="Jirow Technologies Limited official logo"
      className={cn("brand-logo w-auto object-contain", className)}
      height={asset.height}
      src={asset.src}
      width={asset.width}
      {...props}
    />
  );
}
