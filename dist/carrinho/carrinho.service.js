"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoService = void 0;
const common_1 = require("@nestjs/common");
const cardapio_service_1 = require("../cardapio/cardapio.service");
const fs = require("fs-extra");
const path = require("path");
let CarrinhoService = class CarrinhoService {
    constructor(cardapioService) {
        this.cardapioService = cardapioService;
        this.filePath = path.join(__dirname, '..', '..', 'src', 'db', 'carrinho.json');
        this.carrinho = [];
        this.loadCarrinhoFromFile();
    }
    async loadCarrinhoFromFile() {
        try {
            const fileExists = await fs.pathExists(this.filePath);
            if (fileExists) {
                const data = await fs.readFile(this.filePath, 'utf-8');
                this.carrinho = JSON.parse(data);
            }
        }
        catch (error) {
            console.error('Erro ao carregar o carrinho do arquivo:', error);
            this.carrinho = [];
        }
    }
    async saveCarrinhoToFile() {
        try {
            await fs.ensureDir(path.dirname(this.filePath));
            await fs.writeFile(this.filePath, JSON.stringify(this.carrinho, null, 2));
        }
        catch (error) {
            console.error('Erro ao salvar o carrinho no arquivo:', error);
        }
    }
    async adicionarPrato(pratoASerAdicionado) {
        const prato = await this.cardapioService.pegarPrato(pratoASerAdicionado.id);
        if (prato) {
            const pratoDentroDoCarrinho = {
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
            await this.saveCarrinhoToFile();
        }
        return this.carrinho;
    }
    mostrarPratosDoCarrinho() {
        return this.carrinho;
    }
    mostrarPrato(id_carrinho) {
        const comidaEncontrada = this.carrinho.find((x) => x.id === id_carrinho);
        if (!comidaEncontrada) {
            throw new common_1.NotFoundException(`Prato com id ${id_carrinho} não encontrado`);
        }
        return comidaEncontrada;
    }
    async editarPedido(id, pedidoEditado) {
        const index = this.carrinho.findIndex((x) => id === x.id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Pedido com id ${id} não encontrado`);
        }
        const cardapio = await this.cardapioService.pegarPrato(id);
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
        await this.saveCarrinhoToFile();
        return this.carrinho;
    }
    removerPedido(id) {
        const index = this.carrinho.findIndex((x) => x.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Pedido com id ${id} não encontrado`);
        }
        this.carrinho.splice(index, 1);
        this.saveCarrinhoToFile();
        return this.carrinho;
    }
};
exports.CarrinhoService = CarrinhoService;
exports.CarrinhoService = CarrinhoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cardapio_service_1.CardapioService])
], CarrinhoService);
//# sourceMappingURL=carrinho.service.js.map