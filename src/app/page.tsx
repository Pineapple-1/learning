import { Suspense } from "react";
import Pokemons from "@/app/components/pokemons";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const sp = await props.searchParams;

  return (
    <div className="pt-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-xl font-bold">Pokemon Collection Center</h1>

        <Suspense fallback={<div>loading...</div>}>
          <Pokemons sp={sp} />
        </Suspense>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
