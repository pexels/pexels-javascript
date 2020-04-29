import createFetchWrapper from "./createFetchWrapper";
import { PaginationParams, ErrorResponse, Videos } from "./types";

type SearchReturn = Videos | ErrorResponse;

export default function generatePhotoEndpoints(apiKey: string) {
  const fetchWrapper = createFetchWrapper(apiKey, "video");

  return {
    search(
      params: PaginationParams & {
        query: string;
        min_width?: number;
        max_width?: number;
        min_duration?: number;
        max_duration?: number;
      }
    ): Promise<SearchReturn> {
      return fetchWrapper(`/search`, params);
    },
  };
}
