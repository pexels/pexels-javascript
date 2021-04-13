require("isomorphic-fetch");

import generateCollectionEndpoints from "./generateCollectionEndpoints";
import generatePhotoEndpoints from "./generatePhotoEndpoints";
import generateVideoEndpoints from "./generateVideoEndpoints";
import * as typeCheckers from "./typeCheckers";

export default function createClient(apiKey: string) {
  if (!apiKey || typeof apiKey !== "string") {
    throw new TypeError(
      `An ApiKey must be provided when initiating the Pexel's client.`
    );
  }

  return {
    typeCheckers,
    photos: generatePhotoEndpoints(apiKey),
    videos: generateVideoEndpoints(apiKey),
    collections: generateCollectionEndpoints(apiKey),
  };
}
