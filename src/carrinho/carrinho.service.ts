import { Injectable, NotFoundException } from '@nestjs/common';
import {
  PratoDoCarrinho,
  PratoParaSerAdicionado,
} from './dto/create-carrinho.dto';
import { CardapioService } from 'src/cardapio/cardapio.service';
import { Prato } from 'src/cardapio/dto/create-cardapio.dto';
import * as fs from 'fs-extra';
import * as path from 'path';

@Injectable()
export class CarrinhoService {
  // Caminho para salvar o arquivo JSON na pasta db fora da pasta carrinho
  private readonly filePath = path.join(
    __dirname,
    '..',
    '..',
    'src',
    'db',
    'carrinho.json',
  );

  private carrinho: PratoDoCarrinho[] = [];

  // Injetando o CardapioService
  constructor(private readonly cardapioService: CardapioService) {
    this.loadCarrinhoFromFile(); // Carregar o carrinho do arquivo JSON ao iniciar o serviço
  }

  // Carregar carrinho do arquivo JSON
  private async loadCarrinhoFromFile() {
    try {
      const fileExists = await fs.pathExists(this.filePath);
      if (fileExists) {
        const data = await fs.readFile(this.filePath, 'utf-8');
        this.carrinho = JSON.parse(data);
      }
    } catch (error) {
      console.error('Erro ao carregar o carrinho do arquivo:', error);
      this.carrinho = [];
    }
  }

  // Salvar o carrinho no arquivo JSON
  private async saveCarrinhoToFile() {
    try {
      await fs.ensureDir(path.dirname(this.filePath)); // Garante que a pasta db exista
      await fs.writeFile(this.filePath, JSON.stringify(this.carrinho, null, 2));
    } catch (error) {
      console.error('Erro ao salvar o carrinho no arquivo:', error);
    }
  }

  // Adicionar um prato ao carrinho
  async adicionarPrato(pratoASerAdicionado: PratoParaSerAdicionado) {
    const prato: Prato = await this.cardapioService.pegarPrato(
      pratoASerAdicionado.id,
    );

    if (prato) {
      const pratoDentroDoCarrinho: PratoDoCarrinho = {
        img: prato.img,
        favorito: prato.favorito,
        estrelas: prato.estrelas,
        id: pratoASerAdicionado.id,
        nome: prato.nome,
        valor: prato.valor,
        descricao: prato.descricao,
        quantidade: pratoASerAdicionado.quantidade,
      };

      this.carrinho.push(pratoDentroDoCarrinho);
      await this.saveCarrinhoToFile(); // Salva o carrinho após adicionar um prato
    }
    return this.carrinho;
  }

  // Mostrar todos os pratos no carrinho
  mostrarPratosDoCarrinho() {
    return this.carrinho;
  }

  // Mostrar um prato específico no carrinho
  mostrarPrato(id_carrinho: number) {
    const comidaEncontrada = this.carrinho.find((x) => x.id === id_carrinho);
    if (!comidaEncontrada) {
      throw new NotFoundException(`Prato com id ${id_carrinho} não encontrado`);
    }
    return comidaEncontrada;
  }

  // Editar um pedido no carrinho
  async editarPedido(id: number, pedidoEditado: PratoDoCarrinho) {
    const index = this.carrinho.findIndex((x) => id === x.id);
    if (index === -1) {
      throw new NotFoundException(`Pedido com id ${id} não encontrado`);
    }

    const cardapio: Prato = await this.cardapioService.pegarPrato(id);

    this.carrinho[index] = {
      img: cardapio.img,
      favorito: cardapio.favorito,
      estrelas: cardapio.estrelas,
      id: pedidoEditado.id,
      nome: cardapio.nome,
      valor: cardapio.valor,
      descricao: cardapio.descricao,
      quantidade: pedidoEditado.quantidade,
    };

    await this.saveCarrinhoToFile(); // Salva o carrinho após editar um prato
    return this.carrinho;
  }

  // Remover um pedido do carrinho
  removerPedido(id: number) {
    const index = this.carrinho.findIndex((x) => x.id === id);
    if (index === -1) {
      throw new NotFoundException(`Pedido com id ${id} não encontrado`);
    }

    this.carrinho.splice(index, 1);
    this.saveCarrinhoToFile(); // Salva o carrinho após remover um prato

    return this.carrinho;
  }
}
