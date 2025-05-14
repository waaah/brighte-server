import { FindOptionsWhere, Repository } from "typeorm";
import { Lead } from "../../schema/db/entity/Lead";
import { Service } from "../../schema/db/entity/Service";
import { CreateLeadDTO, FindLeadDTO } from "./LeadServiceDTO";

export class LeadService {
  private leadRepository;
  private serviceRepository;

  constructor(
    leadRepository: Repository<Lead>,
    serviceRepository: Repository<Service>
  ) {
    this.leadRepository = leadRepository;
    this.serviceRepository = serviceRepository;
  }

  getById(id: number) {
    return this.leadRepository.findOne({
      where: { id },
      relations: ["services"],
    });
  }

  find(opts: FindLeadDTO) {
    const { services } = opts;
    const where: FindOptionsWhere<Lead> = {};

    if (services) where.services = services.map((s) => ({ name: s }));

    return this.leadRepository.find({
      where: where,
      relations: ["services"],
    });
  }

  findAll() {
    return this.leadRepository.find({ relations: ["services"] });
  }

  async create(leadData: Partial<CreateLeadDTO>) {
    const createdLead = this.leadRepository.create({
      email: leadData.email,
      id: leadData.id,
      name: leadData.name,
      mobile: leadData.mobile,
      postcode: leadData.postcode,
    });
    const newLead = await this.leadRepository.save(createdLead);

    if (leadData.services) {
      const services = this.serviceRepository.create(
        leadData.services.map((s) => ({ name: s, leadId: newLead.id }))
      );
      await this.serviceRepository.save(services);
    }
  }
}
