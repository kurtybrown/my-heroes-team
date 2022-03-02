import { HeroCardInterface } from "./hero.interface";

export interface TeamInterface
{
    title: string,
    description: string,
    heroMembers: HeroCardInterface[]
}