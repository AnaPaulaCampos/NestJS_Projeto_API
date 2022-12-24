import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateAlunoDto {
  @ApiProperty({ example: 'Informe o Nome' })
  @IsString()
  @IsNotEmpty()
  nome_aluno: string;

  @ApiProperty({ example: 'Informe a Descrição' })
  @IsOptional()
  @IsString()
  descricao: string;

  @ApiProperty({ example: 'Informe a quantidade' })
  @IsInt()
  @Min(0)
  quantidade: number;
}
