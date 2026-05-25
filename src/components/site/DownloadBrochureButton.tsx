"use client";

import { useState } from "react";
import { Download, LoaderCircle } from "lucide-react";

import {
  buttonBaseClassName,
  buttonVariants,
  type ButtonVariant
} from "@/components/ui/ButtonLink";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

type DownloadBrochureButtonProps = {
  className?: string;
  label?: string;
  variant?: ButtonVariant;
  onDownloaded?: () => void;
};

export function DownloadBrochureButton({
  className,
  label = "Download Company Profile",
  variant = "primary",
  onDownloaded
}: DownloadBrochureButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(siteConfig.brochureHref, {
        headers: {
          Accept: "application/pdf"
        }
      });

      if (!response.ok) {
        throw new Error("Unable to download brochure");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = siteConfig.brochureFilename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      onDownloaded?.();
    } catch {
      window.location.assign(siteConfig.brochureHref);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      aria-busy={loading}
      className={cn(
        buttonBaseClassName,
        buttonVariants[variant],
        loading && "cursor-wait opacity-85",
        className
      )}
      disabled={loading}
      onClick={handleDownload}
      type="button"
    >
      {loading ? (
        <LoaderCircle className="h-4 w-4 animate-spin" />
      ) : (
        <Download className="h-4 w-4" />
      )}
      {loading ? "Preparing download" : label}
    </button>
  );
}
