export interface ErrorResponse {
  error: string;
}

export interface Params {
  [key: string]: string | number | undefined;
}

export interface PaginationParams extends Params {
  per_page?: number;
  page?: number;
}

export interface PaginationObject {
  url?: string;
  total_results?: number;
  page: number;
  per_page: number;
  next_page: number;
}

export type Photos = PaginationParams & { photos: Photo[] };

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: string;
  liked: boolean;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
}

export interface Video {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  full_res: unknown;
  tags: unknown[];
  duration: number;
  user: {
    id: number;
    name: string;
    url: string;
  };
  video_files: {
    id: number;
    quality: "hd" | "sd" | "hls"; // TODO: find out all types
    file_type: "string";
    width: number | null;
    height: number | null;
    link: string;
  }[];
  video_pictures: {
    id: number;
    picture: string;
    nr: number;
  }[];
}

export type Videos = PaginationParams & { videos: Video[] };
