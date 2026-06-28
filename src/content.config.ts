import { defineCollection } from "astro:content";

import { file } from "astro/loaders";
import { z } from "astro/zod";
import { Temporal } from "temporal-polyfill-lite";

const temporal = defineCollection({
  loader: file("data.json"),
  schema: z.object({
    title: z.string(),
    createdAt: z.coerce.date().transform(date => Temporal.Instant.fromEpochMilliseconds(date.getTime())).optional()
  })
})


export const collections = {
  temporal
}
