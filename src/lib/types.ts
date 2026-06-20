export const MEDIA_TYPES = [
    'book',
    'movie',
    'show', 
    'podcast',
    'game'
] as const;
export type MediaType = typeof MEDIA_TYPES[number];

export type MediaItem = {
    id: number;
    title: string;
    type: MediaType;
};

export type MediaInput = {
    title: string;
    type: MediaType;
};