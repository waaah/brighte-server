import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Lead } from "./Lead";

@Entity()
export class Services extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: number

    @Column()
    leadId: number;

    @ManyToOne(() => Lead, lead => lead.services)
    @JoinColumn({ name: 'leadId' })
    lead: Lead
}