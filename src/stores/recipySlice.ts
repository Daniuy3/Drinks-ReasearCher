import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import { Categories, Drink, DrinkDetail, SearchFilter } from "../types"



export type RecipesSliceType = {
    categories: Categories,
    search: Drink[],
    modal: boolean,
    activeDrink: DrinkDetail,
    fetchCategories: () => Promise<void>,
    searchRecipes: (SearchFilter : SearchFilter) => Promise<void>,
    selectRecipe: (id: Drink["idDrink"]) => Promise<void>,
    setModal: (modal: boolean) => void
}

export const createRecipesSlice :StateCreator<RecipesSliceType> = (set) =>({
    categories: {} as Categories,
    search: [],
    modal: false,
    activeDrink: {} as DrinkDetail,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({categories})
    },
    searchRecipes: async (filters) => {
       const search =  await getRecipes(filters)
        set({search})
    },
    selectRecipe: async (id) => {
       const data = await getRecipeById(id)
       set({activeDrink: data})
    },
    setModal: (modal: boolean) => set(
        modal === false ? {modal, activeDrink: {} as DrinkDetail} :  
        {modal})
})