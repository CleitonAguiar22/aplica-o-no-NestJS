import { ComentarioService } from './comentario.service';
import { Comentario, ComentarioEditado } from './dto/create-comentario.dto';
export declare class ComentarioController {
    private readonly comentarioService;
    constructor(comentarioService: ComentarioService);
    criarComentario(comentario: Comentario): string;
    mostrarComentarios(): Comentario[];
    mostrarComentario(id: number): Comentario[];
    update(id: string, comentarioEditado: ComentarioEditado): Comentario[];
    deletarComentario(id: number): Comentario[];
}
