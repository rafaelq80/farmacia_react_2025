import { Check, X } from '@phosphor-icons/react'

function DeletarCategoria() {

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center py-4'>Deletar Categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-white h-full'>CATEGORIA</p>
                <div className='flex'>

                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 flex items-center justify-center'
                    >
                        <X size={28} color='#ffffff' weight='bold'/>
                    </button>

                    <button
                        className='w-full text-slate-100 bg-indigo-400 
                                   hover:bg-indigo-600 flex items-center justify-center'
                    >
                        <Check size={28} color='#ffffff' weight='bold' />
                    </button>
                    
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria