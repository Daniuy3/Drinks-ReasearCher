import { useEffect, useMemo, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"
import { toast } from "react-toastify"

function Header() {

    const [filters, setFilters] = useState({
        ingredient: "",
        category: ""
    })

    /* Local - Router*/
    const {pathname} = useLocation()
    const isHome = useMemo(() => pathname === "/", [pathname])

    /* Global */
    const {fetchCategories} = useAppStore()
    const {searchRecipes} = useAppStore()
    const {categories} = useAppStore()



    useEffect(() => {
        fetchCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const validated = Object.values(filters).includes("")
        if(validated){
            toast("All fields are required", {type: "error", autoClose: 2000})
            return
        }
        searchRecipes(filters);
    }
  return (
    <header className={isHome? "bg-header bg-cover bg-center" :"bg-slate-800"}>
        <div className="container mx-auto py-16 px-5">
            <div className="flex justify-between items-center">
                <div>   
                    <img src="/logo.svg" alt="logotipo" className="w-32" />
                </div>

                <nav className="flex  gap-4">
                    <NavLink 
                    to="/" 
                    className={({isActive}) => 
                        isActive? "text-orange-500 font-bold hover:text-gray-300 uppercase transition-colors duration-300": "text-white font-bold hover:text-gray-300 uppercase transition-colors duration-300"
                    }
                    
                    >Inicio</NavLink>
                    <NavLink 
                      to="/favorites"
                      className={({isActive}) => 
                        isActive? "text-orange-500 font-bold hover:text-gray-300 uppercase transition-colors duration-300": "text-white font-bold hover:text-gray-300 uppercase transition-colors duration-300"
                    }
                    >Favoritos</NavLink>
                </nav>
            </div>

            {isHome && (
                <form 
                    className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                    onSubmit={handleSubmit}    
                >
                    <div className="space-y-4">
                        <label 
                            htmlFor="ingredient"
                            className="text-white font-bold uppercase text-lg"
                        >Name or Ingredients</label>
                        <input 
                            type="text" id="ingredient" name="ingredient"
                            className="w-full mt-2 p-3 rounded-lg focus:outline-none"
                            placeholder="Name or Ingredient ej. chicken, beef, eggs"
                            onChange={handleChange}
                            value={filters.ingredient}
                        />
                    </div>
                    <div className="space-y-4">
                        <label 
                            htmlFor="category"
                            className="text-white font-bold uppercase text-lg"
                        >Category</label>
                        <select 
                            id="category" name="category"
                            className="w-full mt-2 p-3 rounded-lg focus:outline-none"
                            value={filters.category}
                            onChange={handleChange}
                        >
                            <option value="" disabled className="text-center">-- Select --</option>
                            {categories.drinks?.map(cat => (
                                <option key={cat.strCategory}>{cat.strCategory}</option>
                            ))}
                        </select>
                    </div>

                    <input type="submit" value={"Search"}
                        className="cursor-pointer bg-orange-700 hover:bg-orange-800 text-white font-bold uppercase text-lg p-3 rounded-lg w-full transition-colors duration-300"
                    />
                </form>
            )}
        </div>
    </header>
  )
}

export default Header