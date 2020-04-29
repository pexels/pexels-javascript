import createFetchWrapper from "./createFetchWrapper";
import { PaginationObject, Photo, PaginationParams } from "./types";

interface SearchParams extends PaginationParams {
  query: string;
}
type SearchReturn = PaginationObject & { photos: Photo[] };

interface CuratedParams extends PaginationParams {}
type CuratedReturn = PaginationParams & { photos: Photo[] };

export default function generatePhotoEndpoints(apiKey: string) {
  const fetchWrapper = createFetchWrapper(apiKey);

  return {
    search(params: SearchParams): Promise<SearchReturn> {
      return fetchWrapper(`/search`, params);
    },
    curated(params: CuratedParams = {}): Promise<CuratedReturn> {
      return fetchWrapper(`/curated`, params);
    },
  };
}
