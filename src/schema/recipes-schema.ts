
import { z } from "zod";

export const CategoriesResponseSchema = z.object({
    drinks: z.array(z.object({
        strCategory: z.string()
    }))
})

export const SearchSchema = z.object({
    ingredient: z.string(),
    category: z.string(),
})  

export const RecipeSchema = z.object({
    drinks: z.array(z.object({
        idDrink: z.string(),
        strDrink: z.string(),
        strDrinkThumb: z.string(),
    }))
})

export const drinksSchema = z.array(z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
}))
export const drinkSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
})

export const RecipeDetailSchema = z.object({
    drinks: z.array(z.object({
        idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
  strMeasure6: z.string().nullable(),
    }))
})

export const drinkDetailSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string().nullable(), /* Nulable significa que el valor puede existir o no */
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
  strMeasure6: z.string().nullable(),
})
