"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentarioService = void 0;
const common_1 = require("@nestjs/common");
const console_1 = require("console");
let ComentarioService = class ComentarioService {
    constructor() {
        this.comentarios = [];
    }
    criarComentario(comentario) {
        this.comentarios.push(comentario);
        return comentario.comentario;
    }
    mostrarComentarios() {
        return this.comentarios;
    }
    mostrarComentario(id) {
        const comentarioEncontrado = this.comentarios.filter((x) => x.id === id);
        if (comentarioEncontrado) {
            return comentarioEncontrado;
        }
        throw new console_1.error(`Comentario com id ${id} não foi encontrado`);
    }
    editarComentario(id, comentarioEditado) {
        const comentarioEncontrado = this.comentarios.filter((x) => x.id === id);
        if (comentarioEncontrado) {
            const novoComentario = {
                id: id,
                comentario: comentarioEditado.comentario,
            };
            this.comentarios.splice(comentarioEncontrado.length, 1, novoComentario);
        }
        return this.comentarios;
    }
    deletarComentario(id) {
        const comentarioEncontrado = this.comentarios.filter((x) => x.id === id);
        if (comentarioEncontrado) {
            this.comentarios.splice(comentarioEncontrado.length, 1);
        }
        return this.comentarios;
    }
};
exports.ComentarioService = ComentarioService;
exports.ComentarioService = ComentarioService = __decorate([
    (0, common_1.Injectable)()
], ComentarioService);
//# sourceMappingURL=comentario.service.js.map