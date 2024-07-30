import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"


function Favorites() {
  const { favourites } = useAppStore()
  const hasFavorites = useMemo(() => favourites.length, [favourites])

  return (
    <>
        <h1 className=" text-6xl font-extrabold">Favorites</h1>
        {hasFavorites ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {favourites.map(drink =>(
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>) :
        <p className=" my-10 text-center text-2xl">Favorites will be Here</p>}
    </>
  )
}

export default Favorites