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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardapioController = void 0;
const common_1 = require("@nestjs/common");
const cardapio_service_1 = require("./cardapio.service");
const create_cardapio_dto_1 = require("./dto/create-cardapio.dto");
let CardapioController = class CardapioController {
    constructor(cardapioService) {
        this.cardapioService = cardapioService;
    }
    adicionarNovoPrato(novoPratoDto) {
        return this.cardapioService.adicionarNovoPrato(novoPratoDto);
    }
    pegarTodosOsPratos(params) {
        return this.cardapioService.pegarTodosOsPratos(params);
    }
    pegarPrato(id) {
        return this.cardapioService.pegarPrato(+id);
    }
    update(id, editarPrato) {
        return this.cardapioService.editarPrato(id, editarPrato);
    }
    remove(id) {
        return this.cardapioService.deletarPrato(+id);
    }
};
exports.CardapioController = CardapioController;
__decorate([
    (0, common_1.Post)('prato'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cardapio_dto_1.Prato]),
    __metadata("design:returntype", void 0)
], CardapioController.prototype, "adicionarNovoPrato", null);
__decorate([
    (0, common_1.Get)('pratos'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CardapioController.prototype, "pegarTodosOsPratos", null);
__decorate([
    (0, common_1.Get)('pratos/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CardapioController.prototype, "pegarPrato", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_cardapio_dto_1.Prato]),
    __metadata("design:returntype", void 0)
], CardapioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CardapioController.prototype, "remove", null);
exports.CardapioController = CardapioController = __decorate([
    (0, common_1.Controller)('cardapio'),
    __metadata("design:paramtypes", [cardapio_service_1.CardapioService])
], CardapioController);
//# sourceMappingURL=cardapio.controller.js.map