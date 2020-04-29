import { Params } from "./types";
import { photoBaseUrl, videoBaseUrl } from "./constants";

export default function createFetchWrapper(
  apiKey: string,
  type: "photo" | "video"
) {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
  };

  const baseUrl = type === "photo" ? photoBaseUrl : videoBaseUrl;

  return <T extends Params>(path: string, params?: T) =>
    fetch(
      `${baseUrl}/${path}?${stringifyParams(params || {})}`,
      options
    ).then((response) => response.json());
}

function stringifyParams<T extends Params>(params: T) {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
}
