import createClient from "./createClient";
import { mutateAllValuesToNull } from "./testUtil";

const testApiKey = process.env.API_KEY as string;

if (!testApiKey) {
  throw new Error(
    `API_KEY must be passed in as an environment variable. Get yours from: https://www.pexels.com/api/new/`
  );
}

describe("#createClient", () => {
  test("smoke test", () => {
    expect(() => createClient("api key")).not.toThrowError();
  });

  test("throws an error if an apiKey is not provided", () => {
    expect(() => createClient("")).toThrowError();
  });

  describe("snapshots", () => {
    const client = createClient(testApiKey);

    test("client.photos.search", async () => {
      const value = await client.photos.search({ query: "nature" });
      expect(mutateAllValuesToNull(value)).toMatchSnapshot();
    });

    test("client.photos.curated", async () => {
      const value = await client.photos.curated();
      expect(mutateAllValuesToNull(value)).toMatchSnapshot();
    });

    test("client.photos.show", async () => {
      const value = await client.photos.show({ id: 2014422 });
      expect(mutateAllValuesToNull(value)).toMatchSnapshot();
    });

    test("client.photos.random", async () => {
      const value = await client.photos.random();
      expect(mutateAllValuesToNull(value)).toMatchSnapshot();
    });

    test("client.videos.search", async () => {
      const value = await client.videos.search({ query: "nature" });
      expect(mutateAllValuesToNull(value)).toMatchSnapshot();
    });

    test("client.videos.popular", async () => {
      const value = await client.videos.popular();
      expect(mutateAllValuesToNull(value)).toMatchSnapshot();
    });

    test("client.videos.show", async () => {
      const value = await client.videos.show({ id: 2499611 });
      expect(mutateAllValuesToNull(value)).toMatchSnapshot();
    });

    test("client.collections.all", async () => {
      const value = await client.collections.all();
      expect(mutateAllValuesToNull(value)).toMatchSnapshot();
    });

    test("client.collections.all?filter=videos", async () => {
      const value = await client.collections.all({ type: "videos" });
      expect(mutateAllValuesToNull(value)).toMatchSnapshot();
    });

    test("client.collections.all?filter=photo", async () => {
      const value = await client.collections.all({ type: "photos" });
      expect(mutateAllValuesToNull(value)).toMatchSnapshot();
    });

    test("client.collections.all?filter=photo", async () => {
      const value = await client.collections.all({ type: "photos" });
      expect(mutateAllValuesToNull(value)).toMatchSnapshot();
    });

    test("client.collections.media", async () => {
      const value = await client.collections.media({ id: "sm6azai" });
      expect(mutateAllValuesToNull(value)).toMatchSnapshot();
    });

    test("client.collections.featured", async () => {
      const value = await client.collections.featured();
      expect(mutateAllValuesToNull(value)).toMatchSnapshot();
    });
  });
});
