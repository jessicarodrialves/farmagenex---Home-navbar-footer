function Home() {
    return (
        <>
            <div className="bg-amber-700 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja bem vindo a FarmaGenex
                        </h2>
                        <p className='text-xl'>
                            Se até seu deploy precisa de saúde, imagina você!!!!
                        </p>

                        <div className="flex justify-around gap-4">
                            {/* <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Nova Postagem
                            </div> */}
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="/img/imgAlterada.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home