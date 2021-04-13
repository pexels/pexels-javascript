// This function is used so we can ensure the API is returning an
// object with the correct shape without caring what the data is.
// Since the results will change often it is a way to test against
// live data reliably.
export function mutateAllValuesToNull(object: any) {
  // Allow some data that won't change to not be overridden
  const whitelistedKeys = ["page", "per_page"];

  if (object && typeof object === "object") {
    Object.keys(object).forEach((key) => {
      if (whitelistedKeys.includes(key)) {
        return;
      }

      if (!object) {
        return;
      }

      if (Array.isArray(object)) {
        object.forEach(mutateAllValuesToNull);
        return;
      }

      if (typeof object[key] === "object") {
        mutateAllValuesToNull(object[key]);
        return;
      }

      if (object[key]) {
        object[key] = null;
      }
    });
  }

  return object;
}
