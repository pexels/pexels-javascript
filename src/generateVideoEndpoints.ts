import createFetchWrapper from "./createFetchWrapper";
import {
  PaginationParams,
  ErrorResponse,
  Video,
  Videos,
  VideoFilterParams,
} from "./types";

type SearchReturn = Videos | ErrorResponse;
type PopularReturn = Videos | ErrorResponse;
type ShowReturn = Video;

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
    ): Promise<PopularReturn> {
      return fetchWrapper(`/popular`, params);
    },
    show({ id }: { id: string | number }): Promise<ShowReturn> {
      return fetchWrapper(`/videos/${id}`);
    },
  };
}
