import { Module } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CarrinhoController } from './carrinho.controller';
import { CardapioService } from 'src/cardapio/cardapio.service';

@Module({
  controllers: [CarrinhoController],
  providers: [CarrinhoService, CardapioService],
})
export class CarrinhoModule {}
