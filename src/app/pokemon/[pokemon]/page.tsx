import { Pokemon } from "@/app/types/pokemon-types";
import { Suspense } from "react";

import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ pokemon: string }>;
}) {
  const { pokemon: pokemonId } = await params;

  return (
    <div className={"w-screen h-screen flex items-center justify-center"}>
      <div className={"flex flex-col items-center justify-center gap-6"}>
        <Suspense
          fallback={
            <div
              className={
                "w-[350px] h-[400px] rounded-lg   animate-pulse bg-gray-100"
              }
            />
          }
        >
          <PokemonCard pokemonId={pokemonId} />
        </Suspense>

        <div className={"flex justify-between w-max gap-8"}>
          <button
            className={"bg-white border border-gray-100 px-4 py-2 capitalize"}
          >
            prev
          </button>
          <button
            className={"bg-white border border-gray-100 px-4 py-2 capitalize"}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

async function PokemonCard({ pokemonId }: { pokemonId: string }) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`,
  ).then(async (res) => {
    console.log(pokemonId);
    if (!res.ok) {
      return undefined;
    }
    return res.json() as Promise<Pokemon>;
  });

  if (!pokemon) return null;

  return (
    <div
      className={
        "w-[350px] h-[400px] shadow-md rounded-lg p-6 border border-gray-100  flex flex-col items-center justify-start"
      }
    >
      <div className={"text-xl capitalize text-center"}>
        {pokemon.species.name}
      </div>

      <Image
        src={pokemon.sprites.front_default ?? ""}
        alt={pokemonId}
        loading={"eager"}
        width={80}
        height={80}
      />

      <div className={"flex justify-between items-center overflow-scroll"}>
        <div className={"text-xs capitalize text-left "}>
          {pokemon.moves.map((item) => (
            <div
              className={"flex justify-between items-center"}
              key={item.move.id}
            >
              <div>Moves:{item.move.name} </div>
            </div>
          ))}
        </div>

        <div>helo</div>
      </div>
    </div>
  );
}
