import { PostPreview } from "../../post/models/post-preview.model";

export interface Category
{
    name:string;
    posts:PostPreview[];
}