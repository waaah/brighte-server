import { Repository } from "typeorm";
import { LeadService } from "../../../services/lead/LeadService";
import { Lead } from "../../../schema/db/entity/Lead";
import sinon from "sinon";
import { CreateLeadDTO } from "../../../services/lead/LeadServiceDTO";
import { ServiceTypes } from "../../../types/service-type";
import { Service } from "../../../schema/db/entity/Service";

describe("LeadService", () => {
  let leadService: LeadService;
  let mockLeadRepository: sinon.SinonStubbedInstance<Repository<Lead>>;
  let mockServiceRepository: sinon.SinonStubbedInstance<Repository<Service>>;

  beforeEach(() => {
    mockLeadRepository = sinon.createStubInstance(Repository) as any;
    mockServiceRepository = sinon.createStubInstance(Repository) as any;
    leadService = new LeadService(mockLeadRepository, mockServiceRepository);
  });
  describe("getById()", () => {
    it("should return a lead by id", async () => {
      const leadData = { id: 1 } as Lead;
      mockLeadRepository.findOne.resolves(leadData);
      const lead = await leadService.getById(1);
      expect(lead?.id).toBe(1);
      expect(mockLeadRepository.findOne.callCount).toBe(1);
    });
  });
  describe("findAll()", () => {
    it("should return all leads", async () => {
      const leadsData = [{ id: 1 }] as Lead[];
      mockLeadRepository.find.resolves(leadsData);

      const leads = await leadService.findAll();
      expect(leads?.length).toBe(1);
      expect(mockLeadRepository.find.callCount).toBe(1);
    });
  });
  describe("find()", () => {
    it("should return a lead based on name", async () => {
      mockLeadRepository.find.resolves([]);
      const leads = await leadService.find({
        services: [ServiceTypes.delivery],
      });
      expect(leads?.length).toBe(0);
      expect(mockLeadRepository.find.callCount).toBe(1);
    });
  });
  describe("create()", () => {
    it("should create a new lead", async () => {
      const lead = { name: "Mark" } as Partial<CreateLeadDTO>;
      mockLeadRepository.create.resolves(lead);
      mockLeadRepository.save.resolves();

      await leadService.create(lead);

      expect(mockLeadRepository.create.callCount).toBe(1);
      expect(mockLeadRepository.save.callCount).toBe(1);
    });
  });
});
