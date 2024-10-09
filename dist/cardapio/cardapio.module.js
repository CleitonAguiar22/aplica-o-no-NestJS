"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardapioModule = void 0;
const common_1 = require("@nestjs/common");
const cardapio_service_1 = require("./cardapio.service");
const cardapio_controller_1 = require("./cardapio.controller");
let CardapioModule = class CardapioModule {
};
exports.CardapioModule = CardapioModule;
exports.CardapioModule = CardapioModule = __decorate([
    (0, common_1.Module)({
        controllers: [cardapio_controller_1.CardapioController],
        providers: [cardapio_service_1.CardapioService],
    })
], CardapioModule);
//# sourceMappingURL=cardapio.module.js.map