import { Injectable } from '@nestjs/common';
import { Comentario, ComentarioEditado } from './dto/create-comentario.dto';
import { error } from 'console';

@Injectable()
export class ComentarioService {
  comentarios: Comentario[] = [];
  criarComentario(comentario: Comentario) {
    this.comentarios.push(comentario);

    return comentario.comentario;
  }

  mostrarComentarios() {
    return this.comentarios;
  }

  mostrarComentario(id: number) {
    const comentarioEncontrado = this.comentarios.filter((x) => x.id === id);

    if (comentarioEncontrado) {
      return comentarioEncontrado;
    }

    throw new error(`Comentario com id ${id} não foi encontrado`);
  }

  editarComentario(id: number, comentarioEditado: ComentarioEditado) {
    const comentarioEncontrado = this.comentarios.filter((x) => x.id === id);

    if (comentarioEncontrado) {
      const novoComentario: Comentario = {
        id: id,
        comentario: comentarioEditado.comentario,
      };

      this.comentarios.splice(comentarioEncontrado.length, 1, novoComentario);
    }
    return this.comentarios;
  }

  deletarComentario(id: number) {
    const comentarioEncontrado = this.comentarios.filter((x) => x.id === id);

    if (comentarioEncontrado) {
      this.comentarios.splice(comentarioEncontrado.length, 1);
    }
    return this.comentarios;
  }
}
