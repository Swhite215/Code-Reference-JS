
export interface Hero {
    name: string;
    health: number;
    stamina?: number;
    mana?: number;
    atk: number;
    items: string[];
    canFight?: boolean;
    canCast?: boolean;
    canHeal?: boolean;
}