import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
                bg-amber-700 text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">FarmaGenex</Link>
                    
                    <div className='flex gap-4'>
                        Lista Categorias
                        Cadastrar Categorias
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar