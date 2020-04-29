import { Photos, Videos, ErrorResponse } from "./types";

/**
 * A helper function to determine if the object is a valid Photo response
 */
export function isPhotos(x: any): x is Photos {
  return !!(x && x.photos);
}

/**
 * A helper function to determine if the object is a valid Video response
 */
export function isVideos(x: any): x is Videos {
  return !!(x && x.videos);
}

/**
 * A helper function to determine if the object was an error response
 */
export function isError(x: any): x is ErrorResponse {
  return !!x.error;
}
