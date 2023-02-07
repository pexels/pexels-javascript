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

export interface VideoFilterParams extends Params {
  min_width?: number;
  max_width?: number;
  min_duration?: number;
  max_duration?: number;
}

interface PaginationObject {
  url?: string;
  page: number;
  per_page: number;
  next_page: number;
}

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  alt: string | null;
  avg_color: string | null;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
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

export type Photos = PaginationObject & { photos: Photo[] };

export type PhotosWithTotalResults = Photos & { total_results: number };

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
    fps: number | null;
  }[];
  video_pictures: {
    id: number;
    picture: string;
    nr: number;
  }[];
}

export type Videos = PaginationObject & {
  total_results: number;
  videos: Video[];
};

export type Medium = Photo | Video;

export interface Collection {
  id: string;
  title: string;
  description: string | null;
  private: boolean;
  media_count: number;
  photos_count: number;
  videos_count: number;
}
