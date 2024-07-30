import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, useMemo } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { DrinkDetail } from '../types';
import { toast } from 'react-toastify';

export default function Modal() {
    const { modal, setModal, activeDrink } = useAppStore();
    const {favourites, addFavourite, removeFavourite } = useAppStore()

    /* Valido si este modal contiene alguno de favoritos */
    const favoriteExist = useMemo(()=> favourites.some(f => f.idDrink === activeDrink.idDrink)  ,[activeDrink, favourites])

    console.log(favoriteExist)
    function renderIngredients(){
        const ingredients :JSX.Element[] = []
        for(let i=1; i<6 ; i++){
            const ingredient = activeDrink[`strIngredient${i}` as keyof  DrinkDetail]
            const measure = activeDrink[`strMeasure${i}` as keyof  DrinkDetail]

            if(measure && ingredient){
                ingredients.push(
                    <li key={i} className='text-lg font-normal'>
                        {measure} {ingredient}
                    </li>
                )
            }

        }
        return ingredients
    }

    function handleClick(){
        if(favoriteExist){
            removeFavourite(activeDrink.idDrink)
            toast('Item eliminated', {type: 'error', autoClose: 2000})
        } else{
            addFavourite(activeDrink)
            toast("Item added", {type: 'success', autoClose: 2000})
        }
    }
    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setModal(false)}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                                    <DialogTitle as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                                        {activeDrink.strDrink}
                                    </DialogTitle>
                                    <img 
                                        src={activeDrink.strDrinkThumb} 
                                        alt={`Imagen de ${activeDrink.strDrink}`}
                                        className=' mx-auto w-96 filter brightness-90'
                                        />
                                    <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        <ul className=' list-disc p-5'>
                                            {renderIngredients()}
                                        </ul>
                                    </DialogTitle>
                                    <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        <p
                                            className=' text-lg font-normal'
                                        >{activeDrink.strInstructions}</p>
                                    </DialogTitle>

                                    <div className=' mt-5 flex justify-between gap-4'>
                                        <button
                                            className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-5 w-full text-lg transition-colors duration-300'
                                            onClick={() => setModal(false)}
                                        >Cerrar</button>
                                        <button
                                            className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-5 w-full text-lg transition-colors duration-300'
                                            onClick={handleClick}
                                        >{favoriteExist? "Eliminar Favorito" : "Agregar Favorito"}</button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
