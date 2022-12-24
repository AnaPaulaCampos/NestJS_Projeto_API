import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlunoDto } from './dto/create-Aluno.dto';
import { UpdateAlunoDto } from './dto/update-Aluno.dto';
import { Aluno } from './entities/Aluno.entity';

@Injectable()
export class AlunoService {
  constructor(
    @InjectRepository(Aluno) private readonly repository: Repository<Aluno>,
  ) {}

  create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    const Aluno = this.repository.create(createAlunoDto);
    return this.repository.save(Aluno);
  }

  findAll(): Promise<Aluno[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Aluno> {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: string, updateAlunoDto: UpdateAlunoDto): Promise<Aluno> {
    const Aluno = await this.repository.preload({
      id: id,
      ...updateAlunoDto,
    });
    if (!Aluno) {
      throw new NotFoundException(`Aluno ${id} not found`);
    }
    return this.repository.save(Aluno);
  }

  async remove(id: string) {
    const Aluno = await this.findOne(id);
    return this.repository.remove(Aluno);
  }
}
