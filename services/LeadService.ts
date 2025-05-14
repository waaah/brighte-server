import { DataSource, FindOptionsWhere, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Lead } from "../schema/db/entity/Lead";

export class LeadService {
    private leadRepository;
    constructor(leadRepository: Repository<Lead>) {
        this.leadRepository = leadRepository;
    }

    getById(id: number) {
        return this.leadRepository.findOneBy({
            id
        });
    }

    find(name?: string, mobile?: string, email?: string, postcode?: string) {
        const where: FindOptionsWhere<Lead> = {}
        if (where.name) where.name = name;
        if (where.postcode) where.postcode = postcode;
        if (where.postcode) where.email = email;
        if (where.postcode) where.mobile = mobile;
        return this.leadRepository.find({ where });
    }

    findAll() {
        return this.leadRepository.find();
    }

    create(leadData: Partial<Lead>) {
        const lead = this.leadRepository.create(leadData);
        return this.leadRepository.save(lead);
    }
}