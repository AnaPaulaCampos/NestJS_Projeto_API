import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
export declare class AlunoController {
    private readonly alunoService;
    constructor(alunoService: AlunoService);
    create(createAlunoDto: CreateAlunoDto): Promise<import("./entities/Aluno.entity").Aluno>;
    findAll(): Promise<import("./entities/Aluno.entity").Aluno[]>;
    findOne(id: string): Promise<import("./entities/Aluno.entity").Aluno>;
    update(id: string, updateAlunoDto: UpdateAlunoDto): Promise<import("./entities/Aluno.entity").Aluno>;
    remove(id: string): Promise<import("./entities/Aluno.entity").Aluno>;
}
