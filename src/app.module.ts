import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardapioModule } from './cardapio/cardapio.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { ComentarioModule } from './comentario/comentario.module';

@Module({
  imports: [CardapioModule, CarrinhoModule, ComentarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
