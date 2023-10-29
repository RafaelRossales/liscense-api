import { ICustomer } from "@modules/customer/domain/ICustomer";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
class Customer implements ICustomer {

  @Column()
  id: number;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  key: string;

  @Column()
  small_logo: string;

  @Column()
  large_logo: string;

  @Column()
  acquire: Date;

  @Column()
  expires_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Customer;
