// CODE

import { it } from "vitest";
import { z } from "zod";
import { Equal, Expect } from "./helpers/type-utils";

const genericFetch = <T extends z.ZodTypeAny>(
  url: string,
  schema: T
): Promise<z.infer<T>> => {
  return fetch(url)
    .then((res) => res.json())
    .then((result) => schema.parse(result));
};

// TESTS

it("Should fetch from the Star Wars API", async () => {
  const result = await genericFetch(
    "https://swapi.dev/api/people/1",
    z.object({
      name: z.string(),
    })
  );

  type cases = [
    // Result should equal { name: string }, not any
    Expect<Equal<typeof result, { name: string }>>
  ];
});
