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
exports.ComentarioController = void 0;
const common_1 = require("@nestjs/common");
const comentario_service_1 = require("./comentario.service");
const create_comentario_dto_1 = require("./dto/create-comentario.dto");
let ComentarioController = class ComentarioController {
    constructor(comentarioService) {
        this.comentarioService = comentarioService;
    }
    criarComentario(comentario) {
        return this.comentarioService.criarComentario(comentario);
    }
    mostrarComentarios() {
        return this.comentarioService.mostrarComentarios();
    }
    mostrarComentario(id) {
        return this.comentarioService.mostrarComentario(+id);
    }
    update(id, comentarioEditado) {
        return this.comentarioService.editarComentario(+id, comentarioEditado);
    }
    deletarComentario(id) {
        return this.comentarioService.deletarComentario(+id);
    }
};
exports.ComentarioController = ComentarioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comentario_dto_1.Comentario]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "criarComentario", null);
__decorate([
    (0, common_1.Get)('comentarios'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "mostrarComentarios", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "mostrarComentario", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_comentario_dto_1.ComentarioEditado]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ComentarioController.prototype, "deletarComentario", null);
exports.ComentarioController = ComentarioController = __decorate([
    (0, common_1.Controller)('comentario'),
    __metadata("design:paramtypes", [comentario_service_1.ComentarioService])
], ComentarioController);
//# sourceMappingURL=comentario.controller.js.map