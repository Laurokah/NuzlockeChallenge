export interface APIResource {
    url: string;
}

export interface NamedAPIResource {
    name: string;
    url : string;
}

export interface Pokemon {
    id     : number,
    name   : string,
    sprites: PokemonSprites;
    species: NamedAPIResource;
}

export interface PokemonSprites {
    front_default: string;
}

export interface PokemonSpecies {
    id                  : number;
    name                : string;
    evolves_from_species: NamedAPIResource;
}