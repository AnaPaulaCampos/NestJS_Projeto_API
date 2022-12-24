import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateAlunoDto {
  @IsString()
  @IsNotEmpty()
  nome_aluno: string;

  @IsOptional()
  @IsString()
  descricao: string;

  @IsInt()
  @Min(0)
  quantidade: number;
}
