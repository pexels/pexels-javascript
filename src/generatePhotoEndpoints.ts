import createFetchWrapper from "./createFetchWrapper";
import { Params, PaginationObject, Photo } from "./types";

interface SearchParams extends Params {
  query: string;
  per_page?: number;
  page?: number;
}

type SearchReturn = PaginationObject & { photos: Photo[] };

export default function generatePhotoEndpoints(apiKey: string) {
  const fetchWrapper = createFetchWrapper(apiKey);

  return {
    search(params: SearchParams): Promise<SearchReturn> {
      return fetchWrapper(`/search`, params);
    },
  };
}
