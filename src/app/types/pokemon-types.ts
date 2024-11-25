export interface PokemonApi {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  abilities: Array<PokemonAbilities>;
  base_experience: number;
  cries: Array<Cries>;
  sprites: Sprites;
  species: Species;
  moves:Array<Moves>;
}

export interface PokemonAbilities {
  ability: {
    name: string;
    url: string;
  };
  isHidden: boolean;
  slot: string;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface Species {
  name: string;
  url: string;
}

export interface Moves {
  move: Move;
  version_group_details: Array<unknown>;
}

export interface Move {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;
  damage_class: unknown
}




// type compatibility
// builtin generic types
//
