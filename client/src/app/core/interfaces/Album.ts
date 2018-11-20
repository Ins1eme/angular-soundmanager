import { Song } from "./Song";

export interface Album {
    albumName: string;
    albumAuthor: string;
    backgroundImage: string;
    playlist?: Song[];
}