import { PratoDoCarrinho, PratoParaSerAdicionado } from './dto/create-carrinho.dto';
import { CardapioService } from 'src/cardapio/cardapio.service';
export declare class CarrinhoService {
    private readonly cardapioService;
    private readonly filePath;
    private carrinho;
    constructor(cardapioService: CardapioService);
    private loadCarrinhoFromFile;
    private saveCarrinhoToFile;
    adicionarPrato(pratoASerAdicionado: PratoParaSerAdicionado): Promise<PratoDoCarrinho[]>;
    mostrarPratosDoCarrinho(): PratoDoCarrinho[];
    mostrarPrato(id_carrinho: number): PratoDoCarrinho;
    editarPedido(id: number, pedidoEditado: PratoDoCarrinho): Promise<PratoDoCarrinho[]>;
    removerPedido(id: number): PratoDoCarrinho[];
}
