import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./recipySlice";
import { devtools } from "zustand/middleware";
import { createFavouritesSlice, FavouriteSliceProps } from "./favouritesSlice";

                                                            /* Una copia de todos los argumentos */
export const useAppStore = create<RecipesSliceType & FavouriteSliceProps>()(devtools((...a) =>({
    ...createRecipesSlice(...a) ,
    ...createFavouritesSlice(...a)
}))) 