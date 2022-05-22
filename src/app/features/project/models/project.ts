import { Tag } from "./tag";
import { Thread } from "./thread";

export interface Project
{
    name:string;
    shortDescription:string;
    image:string;
    threads:Thread[];
    tags:Tag[];
    repository:string;
}