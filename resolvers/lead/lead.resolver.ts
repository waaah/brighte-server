import { registerLeadValidator } from "../../schema/validators/registerlead.validator";
import { MainContext } from "../../types/main.context";
import { GetLeadArgs, GetLeadsArgs, RegisterLeadArgs } from "./lead.args";

export const leadResolver = {
  Query: {
    lead: async (
      _parent: unknown,
      _args: GetLeadArgs,
      context: MainContext
    ) => {
      const { id } = _args;
      const lead = await context.leadService.getById(id);
      if (!lead) {
        throw new Error("Cannot find lead");
      }
      return lead;
    },
    leads: async (
      _parent: unknown,
      _args: GetLeadsArgs,
      context: MainContext
    ) => {
      const { services } = _args;
      const leads = await context.leadService.find({ services });
      if (leads.length === 0)
        throw new Error(
          "Cannot find any lead that matches the search criteria"
        );
      return leads;
    },
  },
  Mutation: {
    register: async (
      _parent: unknown,
      _args: RegisterLeadArgs,
      context: MainContext
    ) => {
      const validation = registerLeadValidator.validate(_args);

      if (validation.error) {
        throw new Error(validation.error.message);
      }

      try {
        const { name, email, mobile, postcode, services } = _args;
        await context.leadService.create({
          name,
          email,
          mobile,
          postcode,
          services,
        });
        return "Lead registered successfully";
      } catch (error) {
        throw new Error("An error occurred in creating a new lead");
      }
    },
  },
};
