import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CardapioService } from './cardapio.service';
import { Prato } from './dto/create-cardapio.dto';
@Controller('cardapio')
export class CardapioController {
  constructor(private readonly cardapioService: CardapioService) {}

  /*
  @Post()
  create(@Body() createCardapioDto: Prato) {
    return this.cardapioService.create(createCardapioDto);
  }
  */

  @Post('prato')
  adicionarNovoPrato(@Body() novoPratoDto: Prato) {
    return this.cardapioService.adicionarNovoPrato(novoPratoDto);
  }

  @Get('pratos')
  pegarTodosOsPratos(@Query() params: number) {
    return this.cardapioService.pegarTodosOsPratos(params);
  }

  @Get('pratos/:id')
  pegarPrato(@Param('id') id: string) {
    return this.cardapioService.pegarPrato(+id);
  }

  @Put(':id')
  update(@Param() id: number, @Body() editarPrato: Prato) {
    return this.cardapioService.editarPrato(id, editarPrato);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardapioService.deletarPrato(+id);
  }
}
