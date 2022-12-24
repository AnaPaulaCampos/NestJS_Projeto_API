import { BaseEntity } from 'typeorm';
export declare class Aluno extends BaseEntity {
    id: string;
    updatedAt: Date;
    nome_aluno: string;
    descricao?: string;
    quantidade: number;
}
