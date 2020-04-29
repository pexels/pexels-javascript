import createFetchWrapper from "./createFetchWrapper";
import {
  PaginationParams,
  ErrorResponse,
  Videos,
  VideoFilterParams,
} from "./types";

type SearchReturn = Videos | ErrorResponse;

export default function generatePhotoEndpoints(apiKey: string) {
  const fetchWrapper = createFetchWrapper(apiKey, "video");

  return {
    search(
      params: PaginationParams &
        VideoFilterParams & {
          query: string;
        }
    ): Promise<SearchReturn> {
      return fetchWrapper(`/search`, params);
    },
    popular(
      params: PaginationParams & VideoFilterParams = {}
    ): Promise<SearchReturn> {
      return fetchWrapper(`/popular`, params);
    },
  };
}
