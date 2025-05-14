import { RemoveOptions, Repository, SaveOptions } from "typeorm";
import { leadResolver } from "../../../resolvers/lead/lead.resolver";
import { Lead } from "../../../schema/db/entity/Lead";
import { LeadService } from "../../../services/lead/LeadService";
import sinon from "sinon";
import { MainContext } from "../../../types/main.context";
import assert from "assert";

describe("lead.resolver.spec.ts", () => {
  let leadService: sinon.SinonStubbedInstance<LeadService>;
  beforeEach(() => {
    leadService = sinon.createStubInstance(LeadService);
  });

  describe("lead()", () => {
    it("should return a lead", async () => {
      const expectedLead = new Lead();
      expectedLead.id = 1;

      const lstub = leadService.getById.resolves(expectedLead);
      const response = await leadResolver.Query.lead(
        undefined,
        {
          id: 1,
        },
        { leadService }
      );
      expect(lstub.calledOnce).toBe(true);
      expect(response).toBe(expectedLead);
    });
    it("should throw an error", async () => {
      const expectedLead = new Lead();
      expectedLead.id = 1;

      const lstub = leadService.getById.resolves();
      try {
        await leadResolver.Query.lead(
          undefined,
          {
            id: 1,
          },
          { leadService }
        );
        assert.fail();
      } catch (error) {
        expect(error).toBeTruthy();
        expect(lstub.calledOnce).toBeTruthy();
      }
    });
  });

  describe("leads()", () => {
    it("should return leads", async () => {
      const expectedLead = new Lead();
      expectedLead.id = 1;

      const lstub = leadService.find.resolves([expectedLead]);
      const response = await leadResolver.Query.leads(
        undefined,
        {
          services: [],
        },
        { leadService }
      );
      expect(lstub.calledOnce).toBe(true);
      expect(response).toStrictEqual([expectedLead]);
    });
    it("should throw an error when no leads are found", async () => {
      const expectedLead = new Lead();
      expectedLead.id = 1;
      const lstub = leadService.find.resolves([]);
      try {
        await leadResolver.Query.leads(
          undefined,
          {
            services: [],
          },
          { leadService }
        );
        assert.fail();
      } catch (error) {
        expect(error).toBeTruthy();
        expect(lstub.calledOnce).toBeTruthy();
      }
    });
  });

  describe("register()", () => {
    it("should create a new registration", async () => {
      const expectedLead = new Lead();
      expectedLead.id = 1;

      const lstub = leadService.create.resolves();
      await leadResolver.Mutation.register(
        undefined,
        {
          services: [],
          name: "",
          mobile: "",
          email: "",
          postcode: "",
        },
        { leadService }
      );
      expect(lstub.calledOnce).toBe(true);
    });

    it("should fail to create a new registration", async () => {
      const expectedLead = new Lead();
      expectedLead.id = 1;

      const lstub = leadService.create.rejects();
      try {
        await leadResolver.Mutation.register(
          undefined,
          {
            services: [],
            name: "",
            mobile: "",
            email: "",
            postcode: "",
          },
          { leadService }
        );
        assert.fail();
      } catch (error) {
        expect(error).toBeTruthy();
        expect(lstub.calledOnce).toBe(true);
      }
    });
  });
});
