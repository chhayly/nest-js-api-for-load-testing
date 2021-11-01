import {
  Entity,
  Index,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Index({ unique: true })
  @Column('varchar', { length: 150 })
  field1: string;
  @Index({ unique: true })
  @Column('varchar', { length: 150 })
  field2: string;
  @Index({ unique: true })
  @Column('varchar', { length: 150 })
  field3: string;
  @Index({ unique: true })
  @Column('varchar', { length: 150 })
  field4: string;
  @Index({ unique: true })
  @Column('varchar', { length: 150 })
  field5: string;
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
