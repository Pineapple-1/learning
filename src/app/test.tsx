"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function PageButtons({ nextParams, prevParams }: any) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function goPrev() {
    startTransition(() => {
      router.push(`/?${prevParams}`);
    });
  }

  function goNext() {
    startTransition(() => {
      router.push(`/?${nextParams}`);
    });
  }

  return (
    <>
      {isPending ? (
        "Loading..."
      ) : (
        <>
          <button
            onClick={goPrev}
            className={"bg-white border border-gray-100 px-4 py-2 capitalize"}
          >
            Prev
          </button>
          <button
            onClick={goNext}
            className={"bg-white border border-gray-100 px-4 py-2 capitalize"}
          >
            Next
          </button>
        </>
      )}
    </>
  );
}
