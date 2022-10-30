import { collectionBaseUrl, photoBaseUrl, videoBaseUrl } from './constants';
import { Params } from './types';

type AllowedTypes = 'photo' | 'video' | 'collections';

const baseUrls: { [T in AllowedTypes]: string } = {
  photo: photoBaseUrl,
  video: videoBaseUrl,
  collections: collectionBaseUrl,
};

export default function createFetchWrapper(apiKey: string, type: AllowedTypes) {
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');
  headers.append('User-Agent', 'Pexels/JavaScript');
  headers.append('Authorization', apiKey);

  const options = {
    method: 'GET',
    headers: headers,
  };

  const baseUrl = baseUrls[type];

  return <T extends Params>(path: string, params?: T, cache: boolean = true) => {
    if (!cache) {
      options.headers.append('Cache-Control', 'no-cache');
      options.headers.append('Pragma', 'no-cache');
    }

    return fetch(`${baseUrl}${path}?${stringifyParams(params || {})}`, options).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    });
  };
}

function stringifyParams<T extends Params>(params: T) {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
}
