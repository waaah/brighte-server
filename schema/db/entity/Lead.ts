import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Services } from "./Service"

@Entity()
export class Lead extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    mobile: string

    @Column()
    postcode: string

    @OneToMany(() => Services, (service) => service.lead)
    services: Services[]
}