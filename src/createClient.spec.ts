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
  });
});
