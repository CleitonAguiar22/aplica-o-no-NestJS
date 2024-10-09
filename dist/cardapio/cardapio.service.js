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
exports.CardapioService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs-extra");
const path = require("path");
let CardapioService = class CardapioService {
    constructor() {
        this.filePath = path.join(__dirname, '..', '..', 'src', 'db', 'cardapio.json');
        this.cardapio = [];
        this.loadCardapioFromFile();
    }
    async loadCardapioFromFile() {
        try {
            const fileExists = await fs.pathExists(this.filePath);
            if (fileExists) {
                const data = await fs.readFile(this.filePath, 'utf-8');
                this.cardapio = JSON.parse(data);
            }
        }
        catch (error) {
            console.error('Erro ao carregar o cardápio do arquivo:', error);
            this.cardapio = [];
        }
    }
    async saveCardapioToFile() {
        try {
            await fs.ensureDir(path.dirname(this.filePath));
            console.log(path.dirname(this.filePath));
            await fs.writeFile(this.filePath, JSON.stringify(this.cardapio, null, 2));
        }
        catch (error) {
            console.error('Erro ao salvar o cardápio no arquivo:', error);
        }
    }
    async adicionarNovoPrato(adicionarNovoPrato) {
        this.cardapio.push(adicionarNovoPrato);
        await this.saveCardapioToFile();
        return this.cardapio;
    }
    async pegarTodosOsPratos(id_prato) {
        return this.cardapio.filter((c) => (id_prato ? id_prato === c.id : true));
    }
    async pegarPrato(id_prato) {
        const comidaEncontrada = this.cardapio.find((x) => id_prato === x.id);
        if (!comidaEncontrada) {
            throw new common_1.NotFoundException(`Prato com id ${id_prato} não encontrado`);
        }
        return comidaEncontrada;
    }
    async editarPrato(id_prato, edição) {
        const index = this.cardapio.findIndex((i) => id_prato === i.id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Prato com id ${id_prato} não encontrado`);
        }
        this.cardapio[index] = edição;
        await this.saveCardapioToFile();
        return edição;
    }
    async deletarPrato(id_prato) {
        const index = this.cardapio.findIndex((i) => id_prato === i.id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Prato com id ${id_prato} não encontrado`);
        }
        this.cardapio.splice(index, 1);
        await this.saveCardapioToFile();
        return;
    }
};
exports.CardapioService = CardapioService;
exports.CardapioService = CardapioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CardapioService);
//# sourceMappingURL=cardapio.service.js.map