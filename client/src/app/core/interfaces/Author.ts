import { Album } from "./Album";

export interface Author {
    authorName: string;
    authorImage: string;
    genre: String[]
    albums?: Album[]
}