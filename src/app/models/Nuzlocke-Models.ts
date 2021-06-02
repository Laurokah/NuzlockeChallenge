export interface NuzlockePokemon {
    id         : string;
    species    : string;
    iconSource : string;
    evolveToIds: string[];
}

export interface NuzlockeOwnedPokemon{
    url     : string;
    status  : string;
    nickname: string;
    level   : number;
    pokemon : NuzlockePokemon;
}