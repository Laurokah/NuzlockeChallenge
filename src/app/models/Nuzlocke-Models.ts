export interface Nuzlocke{
    name           : string;
    game           : NuzlockeGame;
    rules          : NuzlockeRule[];
    completed      : boolean;
    completedGyms  : number,
    ownedPokemon   : NuzlockeOwnedPokemon[];
    routes         : NuzlockeRoute[],
    revivingChances: number;
}

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

export interface NuzlockeRule{
    title      : string;
    description: string;
}

export interface NuzlockeGame {
    name        : string;
    versionGroup: string;
}

export interface NuzlockeRoute {
    name      : string;
    waiting   : boolean;
    successful: boolean;
    iconName  : string;
    level     : number;
    nickname  : string;
    species   : string;
    iconSource: string;
}