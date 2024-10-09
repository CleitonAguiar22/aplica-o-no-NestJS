import { CardapioService } from './cardapio.service';
import { Prato } from './dto/create-cardapio.dto';
export declare class CardapioController {
    private readonly cardapioService;
    constructor(cardapioService: CardapioService);
    adicionarNovoPrato(novoPratoDto: Prato): Promise<Prato[]>;
    pegarTodosOsPratos(params: number): Promise<Prato[]>;
    pegarPrato(id: string): Promise<Prato>;
    update(id: number, editarPrato: Prato): Promise<Prato>;
    remove(id: string): Promise<void>;
}
