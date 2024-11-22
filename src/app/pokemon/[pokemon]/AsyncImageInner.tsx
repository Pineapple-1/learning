"use client";

import { ComponentProps, use, useEffect, useState } from "react";

export default function AsyncImageInner({
  src,
  ...props
}: Omit<ComponentProps<"img">, "src"> & {
  src: string | Promise<Blob>;
}) {
  const blob = typeof src === "string" ? src : use(src);
  const [blobUrl, setUrl] = useState<string>();

  useEffect(() => {
    if (!blob || typeof src === "string") return;
    const url = URL.createObjectURL(blob as Blob);
    setUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [blob, src]);

  return <img {...props} src={typeof src === "string" ? src : blobUrl} />;
}
