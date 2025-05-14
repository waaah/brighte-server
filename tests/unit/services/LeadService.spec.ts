import { Repository } from "typeorm";
import { LeadService } from "../../../services/lead/LeadService";
import { Lead } from "../../../schema/db/entity/Lead";
import sinon from "sinon";

describe("LeadService", () => {
  let leadService: LeadService;
  let mockRepository: sinon.SinonStubbedInstance<Repository<Lead>>;

  beforeEach(() => {
    mockRepository = sinon.createStubInstance(Repository) as any;
    leadService = new LeadService(mockRepository);
  });
  describe("getById()", () => {
    it("should return a lead by id", async () => {
      const leadData = { id: 1 } as Lead;
      mockRepository.findOneBy.resolves(leadData);
      const lead = await leadService.getById(1);
      expect(lead?.id).toBe(1);
      expect(mockRepository.findOneBy.callCount).toBe(1);
    });
  });
  describe("findAll()", () => {
    it("should return all leads", async () => {
      const leadsData = [{ id: 1 }] as Lead[];
      mockRepository.find.resolves(leadsData);

      const leads = await leadService.findAll();
      expect(leads?.length).toBe(1);
      expect(mockRepository.find.callCount).toBe(1);
    });
  });
  describe("find()", () => {
    it("should return a lead based on name", async () => {
      mockRepository.find.resolves([]);
      const leads = await leadService.find("Mark");
      expect(leads?.length).toBe(0);
      expect(mockRepository.find.callCount).toBe(1);
    });
  });
  describe("create()", () => {
    it("should create a new lead", async () => {
      const lead = { name: "Mark" } as Partial<Lead>;
      mockRepository.create.resolves(lead);
      mockRepository.save.resolves();

      await leadService.create(lead);

      expect(mockRepository.create.callCount).toBe(1);
      expect(mockRepository.save.callCount).toBe(1);
    });
  });
});
