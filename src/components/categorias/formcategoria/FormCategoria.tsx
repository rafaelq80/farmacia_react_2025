
function FormCategoria() {

  return (
    <div className='container flex flex-col items-center justify-center mx-auto'>
      <h1 className='text-4xl text-center my-8'>
        Cadastrar Categoria
      </h1>

      <form className='w-1/2 flex flex-col gap-4'
        
      >
        <div className='flex flex-col gap-2 '>
          <label htmlFor='categoria'>Categoria</label>
          <input
            type='text'
            placeholder='nome da categoria'
            name='tipo'
            className='bg-white border-2 border-slate-700 rounded p-2 utral-800'
            required
          />
        </div>
        <button
          className='rounded text-slate-100 bg-indigo-400 
          hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center'
          type='submit'
        >
            <span>Cadastrar</span>
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;