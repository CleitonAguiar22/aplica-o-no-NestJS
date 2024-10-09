import { Injectable, NotFoundException } from '@nestjs/common';
import { Prato } from './dto/create-cardapio.dto';
import * as fs from 'fs-extra';
import * as path from 'path';
@Injectable()
export class CardapioService {
  // Caminho para salvar o arquivo JSON na pasta db fora da pasta cardapio
  private readonly filePath = path.join(
    __dirname,
    '..',
    '..',
    'src',
    'db',
    'cardapio.json',
  );

  private cardapio: Prato[] = [];

  constructor() {
    this.loadCardapioFromFile(); // Carregar os dados do arquivo JSON ao iniciar o serviço
  }

  // Carregar cardápio do arquivo JSON
  private async loadCardapioFromFile() {
    try {
      const fileExists = await fs.pathExists(this.filePath);
      if (fileExists) {
        const data = await fs.readFile(this.filePath, 'utf-8');
        this.cardapio = JSON.parse(data);
      }
    } catch (error) {
      console.error('Erro ao carregar o cardápio do arquivo:', error);
      this.cardapio = [];
    }
  }

  // Salvar o cardápio no arquivo JSON
  private async saveCardapioToFile() {
    try {
      await fs.ensureDir(path.dirname(this.filePath)); // Garante que a pasta db exista
      console.log(path.dirname(this.filePath));
      await fs.writeFile(this.filePath, JSON.stringify(this.cardapio, null, 2));
    } catch (error) {
      console.error('Erro ao salvar o cardápio no arquivo:', error);
    }
  }

  // Criar novo prato
  public async adicionarNovoPrato(adicionarNovoPrato: Prato) {
    this.cardapio.push(adicionarNovoPrato);
    await this.saveCardapioToFile(); // Salva no arquivo JSON
    return this.cardapio;
  }

  // Buscar todos os pratos
  async pegarTodosOsPratos(id_prato: number) {
    return this.cardapio.filter((c) => (id_prato ? id_prato === c.id : true));
  }

  // Buscar prato por ID
  async pegarPrato(id_prato: number) {
    const comidaEncontrada = this.cardapio.find((x) => id_prato === x.id);

    if (!comidaEncontrada) {
      throw new NotFoundException(`Prato com id ${id_prato} não encontrado`);
    }

    return comidaEncontrada;
  }

  // Atualizar prato por ID
  async editarPrato(id_prato: number, edição: Prato) {
    const index = this.cardapio.findIndex((i) => id_prato === i.id);

    if (index === -1) {
      throw new NotFoundException(`Prato com id ${id_prato} não encontrado`);
    }

    this.cardapio[index] = edição;
    await this.saveCardapioToFile(); // Salva no arquivo JSON

    return edição;
  }

  // Remover prato por ID
  async deletarPrato(id_prato: number) {
    const index = this.cardapio.findIndex((i) => id_prato === i.id);

    if (index === -1) {
      throw new NotFoundException(`Prato com id ${id_prato} não encontrado`);
    }

    this.cardapio.splice(index, 1);
    await this.saveCardapioToFile(); // Salva no arquivo JSON após a remoção

    return;
  }
}
