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
exports.AlunoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Aluno_entity_1 = require("./entities/Aluno.entity");
let AlunoService = class AlunoService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createAlunoDto) {
        const Aluno = this.repository.create(createAlunoDto);
        return this.repository.save(Aluno);
    }
    findAll() {
        return this.repository.find();
    }
    findOne(id) {
        return this.repository.findOne({ where: { id } });
    }
    async update(id, updateAlunoDto) {
        const Aluno = await this.repository.preload(Object.assign({ id: id }, updateAlunoDto));
        if (!Aluno) {
            throw new common_1.NotFoundException(`Aluno ${id} not found`);
        }
        return this.repository.save(Aluno);
    }
    async remove(id) {
        const Aluno = await this.findOne(id);
        return this.repository.remove(Aluno);
    }
};
AlunoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Aluno_entity_1.Aluno)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AlunoService);
exports.AlunoService = AlunoService;
//# sourceMappingURL=aluno.service.js.map