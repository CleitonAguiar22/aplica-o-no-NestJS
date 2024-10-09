import { CarrinhoService } from './carrinho.service';
import { PratoParaSerAdicionado, PratoDoCarrinho } from './dto/create-carrinho.dto';
export declare class CarrinhoController {
    private readonly carrinhoService;
    constructor(carrinhoService: CarrinhoService);
    adicionarPrato(prato: PratoParaSerAdicionado): Promise<PratoDoCarrinho[]>;
    mostrarTodosOsPratos(): PratoDoCarrinho[];
    mostrarPrato(id: number): PratoDoCarrinho;
    editarPedido(id: number, pedidoEditado: PratoDoCarrinho): Promise<PratoDoCarrinho[]>;
    removerPedido(id: number): PratoDoCarrinho[];
}
