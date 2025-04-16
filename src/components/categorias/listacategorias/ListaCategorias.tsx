import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { buscar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import CardCategorias from "../cardcategorias/CardCategorias";

function ListaCategorias() {

    //o navigate envia para outro local
   // const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria[]>([])

    // const { usuario, handleLogout } = useContext(AuthContext)
    // const token = usuario.token

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias 
               // headers: { Authorization: token }
            )
        } catch (error: any) {
            if (error.toString().includes('404')) {
                //handleLogout()
            }
        }
    }

    useEffect(() => {
        buscarCategorias()    
    }, [categorias.length])
    
    return (
        <>
        {categorias.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias;