import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import {
  PratoParaSerAdicionado,
  PratoDoCarrinho,
} from './dto/create-carrinho.dto';

@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  @Post('prato')
  adicionarPrato(@Body() prato: PratoParaSerAdicionado) {
    return this.carrinhoService.adicionarPrato(prato);
  }

  @Get('pratos')
  mostrarTodosOsPratos() {
    return this.carrinhoService.mostrarPratosDoCarrinho();
  }

  @Get(':id')
  mostrarPrato(@Param('id') id: number) {
    return this.carrinhoService.mostrarPrato(+id);
  }

  @Put(':id')
  editarPedido(
    @Param('id') id: number,
    @Body() pedidoEditado: PratoDoCarrinho,
  ) {
    return this.carrinhoService.editarPedido(+id, pedidoEditado);
  }

  @Delete(':id')
  removerPedido(@Param('id') id: number) {
    return this.carrinhoService.removerPedido(+id);
  }
}
