// import Categoria from "./Postagem";

import Produto from "./Produto";

export default interface Categoria {
    id: number;
    nome: string;
    descricao: string;
    pproduto?: Produto[] | null;
}