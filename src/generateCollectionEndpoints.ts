import createFetchWrapper from "./createFetchWrapper";
import { Collection, PaginationParams, ErrorResponse, Medium } from "./types";

type AllReturn =
  | {
      page: number;
      per_page: number;
      collections: Collection[];
    }
  | ErrorResponse;

type MediaReturn =
  | {
      page: number;
      per_page: number;
      total_results: number;
      media: (Medium & { type: "Video" | "Photo" })[];
    }
  | ErrorResponse;

type FeaturedReturn =
  | { page: number; per_page: number; collections: Collection[] }
  | ErrorResponse;

export default function generateCollectionEndpoints(apiKey: string) {
  const fetchWrapper = createFetchWrapper(apiKey, "collections");

  return {
    all(params: PaginationParams = {}): Promise<AllReturn> {
      return fetchWrapper("", params);
    },
    media({
      id,
      ...params
    }: PaginationParams & {
      id: string | number;
      type?: "photos" | "videos";
    }): Promise<MediaReturn> {
      return fetchWrapper(`${id}`, params);
    },
    featured(params: PaginationParams = {}): Promise<FeaturedReturn> {
      return fetchWrapper("featured", params);
    },
  };
}
