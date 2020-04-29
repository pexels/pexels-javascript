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
  total_results: number;
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

export function isPhotos(x: any): x is Photos {
  return !!(x && x.photos);
}

export function isError(x: any): x is ErrorResponse {
  return !!x.error;
}
