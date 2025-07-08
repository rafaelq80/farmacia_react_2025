import { Link } from 'react-router-dom';
import { PencilIcon, TrashIcon } from '@phosphor-icons/react';

function CardCategorias() {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between bg-white'>
           
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>Categoria</header>
            
            <p className='p-8 text-3xl bg-white h-full'>CATEGORIA</p>
            
            <div className='bg-gradient-to-b from-indigo-800 to-indigo-600 flex justify-center items-center gap-2 p-2'>
                
                <Link to=''>
                    <PencilIcon size={28} color='white' className='mr-1 hover:fill-cyan-400' />
                </Link>

                <Link to=''>
                    <TrashIcon size={28} color='white' className='mr-1 hover:fill-red-400' />
                </Link>

            </div>

        </div>
    );
}

export default CardCategorias;