import CardCategorias from '../cardcategorias/CardCategorias'

function ListarCategorias() {
	
	return (
		<>
			
			<div className='flex justify-center w-full py-8'>
				<div className='container flex flex-col mx-4'>

					<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
						<CardCategorias />
					</div>

				</div>
			</div>
		</>
	)
}

export default ListarCategorias
