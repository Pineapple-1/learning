import Link from "next/link";
import PageButtons from "@/app/test";

export default async function Pokemons({
  sp,
}: {
  sp: { offset?: string; limit?: string };
}) {
  const pokemons = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${sp.offset ?? 0}&limit=${sp.limit ?? 20}`,
  ).then((res) => res.json());


  return (
    <div className={"w-full px-10 flex flex-col items-center justify-center "}>
      <div className="flex flex-col gap-8 flex-wrap items-start">
        {pokemons?.results?.map((pokemon: any) => (
          <Link
            key={pokemon.url}
            href={`/pokemon/${pokemon.name}/?next=charmeleon&prev=charmander`}
            className={"capitalize cursor-pointer"}
            prefetch
          >
            {pokemon.name}
          </Link>
        ))}
      </div>
      <div>



        \\ now i want to fetch the next pages on the client
      </div>
      <div className={"flex gap-5 justify-between items-center"}>
        <PageButtons
          nextParams={
            pokemons?.next ? new URL(pokemons?.next)?.searchParams?.toString():""
          }
          prevParams={
            pokemons?.previous ?
            new URL(pokemons?.previous)?.searchParams?.toString():""
          }
        />
      </div>
    </div>
  );
}
