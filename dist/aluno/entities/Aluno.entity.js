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
exports.Aluno = void 0;
const typeorm_1 = require("typeorm");
let Aluno = class Aluno extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Aluno.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Aluno.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome_aluno', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Aluno.prototype, "nome_aluno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'descricao', type: 'varchar', nullable: true, length: 100 }),
    __metadata("design:type", String)
], Aluno.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'quantidade', type: 'int' }),
    __metadata("design:type", Number)
], Aluno.prototype, "quantidade", void 0);
Aluno = __decorate([
    (0, typeorm_1.Entity)()
], Aluno);
exports.Aluno = Aluno;
//# sourceMappingURL=Aluno.entity.js.map