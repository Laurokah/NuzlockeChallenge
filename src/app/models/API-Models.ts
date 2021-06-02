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

export interface Location{
    id    : number;
    name  : string;
    region: NamedAPIResource;
}

export interface Version{
    id           : number;
    name         : string;
    version_group: NamedAPIResource;
}

export interface VersionGroup{
    id        : number;
    name      : string;
    generation: NamedAPIResource;
    regions   : NamedAPIResource[];
    versions  : NamedAPIResource[];
}

export interface Region{
    id             : number;
    locations      : NamedAPIResource[];
    name           : string;
    main_generation: NamedAPIResource;
    version_groups : NamedAPIResource[];
}