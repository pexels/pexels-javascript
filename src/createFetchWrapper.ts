import { Params } from "./types";
import { photoBaseUrl, videoBaseUrl, collectionBaseUrl } from "./constants";

type AllowedTypes = "photo" | "video" | "collections";

const baseUrls: { [T in AllowedTypes]: string } = {
  photo: photoBaseUrl,
  video: videoBaseUrl,
  collections: collectionBaseUrl,
};

export default function createFetchWrapper(apiKey: string, type: AllowedTypes) {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "Pexels/JavaScript",
      Authorization: apiKey,
    },
  };

  const baseUrl = baseUrls[type];

  return <T extends Params>(path: string, params?: T) =>
    fetch(`${baseUrl}${path}?${stringifyParams(params || {})}`, options).then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return response.json();
      }
    );
}

function stringifyParams<T extends Params>(params: T) {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
}
