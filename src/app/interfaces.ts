export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    sprites: Sprites;
    types: Type[];
}

export interface Type {
    slot: number;
    type: Type2;
}

export interface Type2 {
    name: string;
    url: string;
}

export interface Sprites {
    front_default: string;
}

export interface Result {
    name: string;
    url: string;
    imageUrl:string;
}

export interface MyResponse {
    count: number;
    next: string;
    previous?: any;
    results: Result[];
}
