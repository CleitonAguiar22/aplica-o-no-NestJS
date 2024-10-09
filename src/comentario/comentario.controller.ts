import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { Comentario, ComentarioEditado } from './dto/create-comentario.dto';

@Controller('comentario')
export class ComentarioController {
  constructor(private readonly comentarioService: ComentarioService) {}

  @Post()
  criarComentario(@Body() comentario: Comentario) {
    return this.comentarioService.criarComentario(comentario);
  }

  @Get('comentarios')
  mostrarComentarios() {
    return this.comentarioService.mostrarComentarios();
  }

  @Get(':id')
  mostrarComentario(@Param('id') id: number) {
    return this.comentarioService.mostrarComentario(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() comentarioEditado: ComentarioEditado,
  ) {
    return this.comentarioService.editarComentario(+id, comentarioEditado);
  }

  @Delete(':id')
  deletarComentario(@Param('id') id: number) {
    return this.comentarioService.deletarComentario(+id);
  }
}
