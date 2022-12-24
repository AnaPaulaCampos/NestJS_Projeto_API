import { Repository } from 'typeorm';
import { CreateAlunoDto } from './dto/create-Aluno.dto';
import { UpdateAlunoDto } from './dto/update-Aluno.dto';
import { Aluno } from './entities/Aluno.entity';
export declare class AlunoService {
    private readonly repository;
    constructor(repository: Repository<Aluno>);
    create(createAlunoDto: CreateAlunoDto): Promise<Aluno>;
    findAll(): Promise<Aluno[]>;
    findOne(id: string): Promise<Aluno>;
    update(id: string, updateAlunoDto: UpdateAlunoDto): Promise<Aluno>;
    remove(id: string): Promise<Aluno>;
}
