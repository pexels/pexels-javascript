require("isomorphic-fetch");

import generatePhotoEndpoints from "./generatePhotoEndpoints";
import generateVideoEndpoints from "./generateVideoEndpoints";

export default function createClient(apiKey: string) {
  if (!apiKey || typeof apiKey !== "string") {
    throw new TypeError(
      `An ApiKey must be provided when initiating the Pexel's client.`
    );
  }

  return {
    photos: generatePhotoEndpoints(apiKey),
    videos: generateVideoEndpoints(apiKey),
  };
}
