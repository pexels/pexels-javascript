import createClient from "./createClient";

describe("#createClient", () => {
  test("smoke test", () => {
    expect(() => createClient("api key")).not.toThrowError();
  });

  test("throws an error if an apiKey is not provided", () => {
    expect(() => createClient("")).toThrowError();
  });
});
