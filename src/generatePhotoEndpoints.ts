import createFetchWrapper from "./createFetchWrapper";
import {
  Photo,
  PaginationParams,
  ErrorResponse,
  Photos,
  PhotosWithTotalResults,
} from "./types";
import { isPhotos } from "./typeCheckers";

type SearchReturn = PhotosWithTotalResults | ErrorResponse;
type CuratedReturn = Photos | ErrorResponse;
type ShowReturn = Photo | ErrorResponse;
type RandomReturn = Photo | ErrorResponse;

export default function generatePhotoEndpoints(apiKey: string) {
  const fetchWrapper = createFetchWrapper(apiKey, "photo");

  return {
    search(
      params: PaginationParams & { query: string }
    ): Promise<SearchReturn> {
      return fetchWrapper(`/search`, params);
    },
    curated(params: PaginationParams = {}): Promise<CuratedReturn> {
      return fetchWrapper(`/curated`, params);
    },
    show({ id }: { id: string | number }): Promise<ShowReturn> {
      return fetchWrapper(`/photos/${id}`);
    },
    async random(): Promise<RandomReturn> {
      const randomPage = Math.floor(1000 * Math.random());
      const response = await this.curated({ page: randomPage, per_page: 1 });

      if (isPhotos(response)) {
        return response.photos[0] as RandomReturn;
      }

      return response as ErrorResponse;
    },
  };
}
