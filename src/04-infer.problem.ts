// CODE

import { z } from "zod";

const StarWarsPerson = z.object({
  name: z.string(),
});

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson),
});

type StarWarsPeopleResults = z.infer<typeof StarWarsPeopleResults>;

const logStarWarsPeopleResults = (data: StarWarsPeopleResults) => {
  data.results.map((person) => {
    console.log(person.name);
  });
};
