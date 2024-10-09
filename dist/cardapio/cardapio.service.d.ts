import { Prato } from './dto/create-cardapio.dto';
export declare class CardapioService {
    private readonly filePath;
    private cardapio;
    constructor();
    private loadCardapioFromFile;
    private saveCardapioToFile;
    adicionarNovoPrato(adicionarNovoPrato: Prato): Promise<Prato[]>;
    pegarTodosOsPratos(id_prato: number): Promise<Prato[]>;
    pegarPrato(id_prato: number): Promise<Prato>;
    editarPrato(id_prato: number, edição: Prato): Promise<Prato>;
    deletarPrato(id_prato: number): Promise<void>;
}
