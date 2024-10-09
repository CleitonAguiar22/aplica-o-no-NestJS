import { Comentario, ComentarioEditado } from './dto/create-comentario.dto';
export declare class ComentarioService {
    comentarios: Comentario[];
    criarComentario(comentario: Comentario): string;
    mostrarComentarios(): Comentario[];
    mostrarComentario(id: number): Comentario[];
    editarComentario(id: number, comentarioEditado: ComentarioEditado): Comentario[];
    deletarComentario(id: number): Comentario[];
}
