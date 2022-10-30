import createFetchWrapper from './createFetchWrapper';
import { Collection, ErrorResponse, Medium, PaginationParams } from './types';

type AllReturn =
  | {
      page: number;
      per_page: number;
      total_results: number;
      collections: Collection[];
    }
  | ErrorResponse;

type MediaReturn =
  | {
      page: number;
      per_page: number;
      total_results: number;
      media: (Medium & { type: 'Video' | 'Photo' })[];
    }
  | ErrorResponse;

type FeaturedReturn =
  | {
      page: number;
      per_page: number;
      total_results: number;
      collections: Collection[];
    }
  | ErrorResponse;

export default function generateCollectionEndpoints(apiKey: string) {
  const fetchWrapper = createFetchWrapper(apiKey, 'collections');

  return {
    all(params: PaginationParams = {}, cache: boolean = true): Promise<AllReturn> {
      return fetchWrapper('', params, cache);
    },
    media(
      {
        id,
        ...params
      }: PaginationParams & {
        id: string | number;
        type?: 'photos' | 'videos';
      },
      cache: boolean = true,
    ): Promise<MediaReturn> {
      return fetchWrapper(`${id}`, params, cache);
    },
    featured(params: PaginationParams = {}, cache: boolean = true): Promise<FeaturedReturn> {
      return fetchWrapper('featured', params, cache);
    },
  };
}
