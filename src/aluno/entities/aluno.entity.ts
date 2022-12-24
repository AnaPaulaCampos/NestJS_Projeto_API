import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Aluno extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ name: 'nome_aluno', type: 'varchar', length: 50 })
  nome_aluno: string;

  @Column({ name: 'descricao', type: 'varchar', nullable: true, length: 100 })
  descricao?: string;

  @Column({ name: 'quantidade', type: 'int' })
  quantidade: number;
}
