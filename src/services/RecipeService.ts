import axios from "axios"
import { CategoriesResponseSchema, RecipeDetailSchema, RecipeSchema } from "../schema/recipes-schema"
import { Drink, SearchFilter } from "../types"


export async function getCategories(){
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    
    const {data} = await axios.get(url)

    const result = CategoriesResponseSchema.safeParse(data)
    
    if(result.success){
        return result.data
    }
}

export async function getRecipes(filters :SearchFilter){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    
    const {data} = await axios.get(url)
    
    const result = RecipeSchema.safeParse(data)

    if(result.success){
        return result.data.drinks
    }
}

export async function getRecipeById(id: Drink["idDrink"]){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    
    const {data} = await axios.get(url)
    console.log(url)
   const result = RecipeDetailSchema.safeParse(data)
   
   if(result.success){
       return result.data.drinks[0]
   }

}