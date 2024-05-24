export interface Quote {
  sentence:  string;
  character: Character;
}

export interface Character {
  name:  string;
  slug:  string;
  house: House;
}

export interface House {
  name: string;
  slug: string;
}
