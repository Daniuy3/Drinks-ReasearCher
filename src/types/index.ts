import { z } from "zod"
import { CategoriesResponseSchema, drinkDetailSchema, drinkSchema, SearchSchema } from "../schema/recipes-schema"

export type Categories = z.infer<typeof CategoriesResponseSchema>

export type SearchFilter = z.infer<typeof SearchSchema>

export type Drink = z.infer<typeof drinkSchema>

export type DrinkDetail = z.infer<typeof drinkDetailSchema> 