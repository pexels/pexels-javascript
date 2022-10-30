import createFetchWrapper from './createFetchWrapper';
import { isPhotos } from './typeCheckers';
import { ErrorResponse, PaginationParams, Photo, Photos, PhotosWithTotalResults } from './types';

type SearchReturn = PhotosWithTotalResults | ErrorResponse;
type CuratedReturn = Photos | ErrorResponse;
type ShowReturn = Photo | ErrorResponse;
type RandomReturn = Photo | ErrorResponse;

export default function generatePhotoEndpoints(apiKey: string) {
  const fetchWrapper = createFetchWrapper(apiKey, 'photo');

  return {
    search(params: PaginationParams & { query: string }, cache: boolean = true): Promise<SearchReturn> {
      return fetchWrapper(`/search`, params, cache);
    },
    curated(params: PaginationParams = {}, cache: boolean = true): Promise<CuratedReturn> {
      return fetchWrapper(`/curated`, params, cache);
    },
    show({ id }: { id: string | number }, cache: boolean = true): Promise<ShowReturn> {
      return fetchWrapper(`/photos/${id}`, {}, cache);
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
