import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}
function DrinkCard({drink}: DrinkCardProps) {

    const {selectRecipe} = useAppStore()
    const {setModal} = useAppStore()
    const handleClick = () => {
        selectRecipe(drink.idDrink)
        setModal(true)
    }
return (
    <div className="border shadow-lg">
            <div
                className=" overflow-hidden"
            >
                    <img src={drink.strDrinkThumb} alt={`imagen de ${drink.strDrink}`} 
                        className=" hover:scale-125 transition-transform duration-300 filter brightness-75 ease-in hover:rotate-2"
                    />
            </div>
            <div className="p-5">
                    <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
                    <button
                            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-5 w-full text-lg"
                            onClick={handleClick}
                    >
                            See More
                    </button>
            </div>
    </div>
)
}

export default DrinkCard