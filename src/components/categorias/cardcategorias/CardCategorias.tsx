import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriasProps{
    categoria: Categoria
}

function CardCategorias({categoria }: CardCategoriasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            {/* <header className='py-2 px-6 bg-amber-700 text-white font-bold text-2xl'>
                Categoria
            </header> */}
            <p className='py-2 px-2 bg-fuchsia-100 font-bold text-3xl  text-fuchsia-950 '>{categoria.nome}</p>            
            <p className='p-2 px-2 text-3xl  bg-fuchsia-100 h-full'>{categoria.descricao}</p>
            <div className="flex">
            <Link to={`/editarcategoria/${categoria.id}`}
                // className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'> 
                className='text-white bg-purple-950 hover:bg-gray-800 w-full flex items-center justify-center'>
                
                <button>Editar</button>
            </Link>
            <Link to={`/deletarcategoria/${categoria.id}`} 
	            className='text-white bg-red-900 hover:bg-red-800 w-full flex items-center justify-center'>
	            <button>Deletar</button>
            </Link>
            </div>

        </div>
    )
}

export default CardCategorias