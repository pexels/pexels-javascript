import createClient from "./createClient";
import { mutateAllValuesToNull } from "./testUtil";
import { testApiKey } from "./constants";

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
      const queries = await Promise.all([
        client.photos.search({ query: "nature" }),
        client.photos.search({ query: "nature", page: 1, per_page: 4, }), // prettier-ignore
      ]);
      queries.forEach((value) => expect(mutateAllValuesToNull(value)).toMatchSnapshot()); // prettier-ignore
    });

    test("client.photos.curated", async () => {
      const queries = await Promise.all([
        client.photos.curated(),
        client.photos.curated({ page: 1, per_page: 10 }),
      ]);
      queries.forEach((value) => expect(mutateAllValuesToNull(value)).toMatchSnapshot()); // prettier-ignore
    });

    test("client.photos.show", async () => {
      const queries = await Promise.all([client.photos.show({ id: 2014422 })]);
      queries.forEach((value) => expect(mutateAllValuesToNull(value)).toMatchSnapshot()); // prettier-ignore
    });

    test("client.photos.random", async () => {
      const queries = await Promise.all([client.photos.random()]);
      queries.forEach((value) => expect(mutateAllValuesToNull(value)).toMatchSnapshot()); // prettier-ignore
    });
  });
});
