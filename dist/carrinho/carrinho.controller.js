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
exports.CarrinhoController = void 0;
const common_1 = require("@nestjs/common");
const carrinho_service_1 = require("./carrinho.service");
const create_carrinho_dto_1 = require("./dto/create-carrinho.dto");
let CarrinhoController = class CarrinhoController {
    constructor(carrinhoService) {
        this.carrinhoService = carrinhoService;
    }
    adicionarPrato(prato) {
        return this.carrinhoService.adicionarPrato(prato);
    }
    mostrarTodosOsPratos() {
        return this.carrinhoService.mostrarPratosDoCarrinho();
    }
    mostrarPrato(id) {
        return this.carrinhoService.mostrarPrato(+id);
    }
    editarPedido(id, pedidoEditado) {
        return this.carrinhoService.editarPedido(+id, pedidoEditado);
    }
    removerPedido(id) {
        return this.carrinhoService.removerPedido(+id);
    }
};
exports.CarrinhoController = CarrinhoController;
__decorate([
    (0, common_1.Post)('prato'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_carrinho_dto_1.PratoParaSerAdicionado]),
    __metadata("design:returntype", void 0)
], CarrinhoController.prototype, "adicionarPrato", null);
__decorate([
    (0, common_1.Get)('pratos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarrinhoController.prototype, "mostrarTodosOsPratos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CarrinhoController.prototype, "mostrarPrato", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_carrinho_dto_1.PratoDoCarrinho]),
    __metadata("design:returntype", void 0)
], CarrinhoController.prototype, "editarPedido", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CarrinhoController.prototype, "removerPedido", null);
exports.CarrinhoController = CarrinhoController = __decorate([
    (0, common_1.Controller)('carrinho'),
    __metadata("design:paramtypes", [carrinho_service_1.CarrinhoService])
], CarrinhoController);
//# sourceMappingURL=carrinho.controller.js.map