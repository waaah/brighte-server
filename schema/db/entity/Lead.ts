import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Service } from "./Service";

@Entity()
export class Lead extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  mobile: string;

  @Column()
  postcode: string;

  @OneToMany(() => Service, (service) => service.lead)
  services: Service[];
}
