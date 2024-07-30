import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"


function IndexPage() {
  
  const {search} = useAppStore()

  const hasDrinks = useMemo(() => search.length > 0, [search])

  return (
    <>
       <h1 className="text-6xl font-extrabold text-center md:text-left">Recipes</h1>

       {hasDrinks ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"
          >
            {search.map(drink => (
              <DrinkCard key={drink.idDrink} drink={drink} />
            ))}
          </div> 
      ) : (
        <p className="my-10 text-center text-2xl">
          there aren't results yet, use de form to search drinks
        </p>
      )}
    </>
  )
}

export default IndexPage