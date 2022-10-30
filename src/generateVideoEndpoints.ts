import createFetchWrapper from './createFetchWrapper';
import { ErrorResponse, PaginationParams, Video, VideoFilterParams, Videos } from './types';

type SearchReturn = Videos | ErrorResponse;
type PopularReturn = Videos | ErrorResponse;
type ShowReturn = Video;

export default function generatePhotoEndpoints(apiKey: string) {
  const fetchWrapper = createFetchWrapper(apiKey, 'video');

  return {
    search(
      params: PaginationParams &
        VideoFilterParams & {
          query: string;
        },
      cache: boolean = true,
    ): Promise<SearchReturn> {
      return fetchWrapper(`/search`, params, cache);
    },
    popular(params: PaginationParams & VideoFilterParams = {}, cache: boolean = true): Promise<PopularReturn> {
      return fetchWrapper(`/popular`, params, cache);
    },
    show({ id }: { id: string | number }, cache: boolean = true): Promise<ShowReturn> {
      return fetchWrapper(`/videos/${id}`, {}, cache);
    },
  };
}
