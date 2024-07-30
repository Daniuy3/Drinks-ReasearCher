import { StateCreator } from "zustand";
import { DrinkDetail } from "../types";

function initialFavourite (){
    const favourites = localStorage.getItem('favourites')
    return favourites ? JSON.parse(favourites) : []
}

export type FavouriteSliceProps = {
    favourites: DrinkDetail[],
    addFavourite: (drink: DrinkDetail) => void,
    removeFavourite: (id: DrinkDetail["idDrink"]) => void
}

export const createFavouritesSlice: StateCreator<FavouriteSliceProps> = (set, get) => ({
    favourites: initialFavourite(),
    addFavourite: (drink: DrinkDetail) => {
        set((state) =>({
            
                favourites: [...state.favourites,drink]
        }))
        localStorage.setItem('favourites', JSON.stringify(get().favourites))
    },
    removeFavourite: (id) => {
        set(state =>{
            return{
                favourites: state.favourites.filter(f => f.idDrink !== id)
            }
        })
        localStorage.setItem('favourites', JSON.stringify(get().favourites))
    }
})