import { cache, ComponentProps, Suspense } from "react";
import AsyncImageInner from "./AsyncImageInner";

const fetchImageBlob = cache((src: string) => fetch(src).then(res => res.blob()));


export function AsyncImage(props: ComponentProps<"img"> & {src: string}) {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <AsyncImageInner {...props} src={fetchImageBlob(props.src)} />
    </Suspense>
  )
}