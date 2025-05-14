import { MainContext } from "../../types/main.context";
import { GetLeadArgs, GetLeadsArgs, } from "./lead.args";

export const leadResolver = {
    Query: {
        lead: async (_parent: unknown, _args: GetLeadArgs, context: MainContext) => {
            const { id } = _args;
            const lead = await context.leadService.getById(id);
            if (!lead) {
                throw new Error("Cannot find lead")
            }
            return lead;
        },
        leads: async (_parent: unknown, _args: GetLeadsArgs, context: MainContext) => {
            try {
                const { name, postcode, email, mobile } = _args;
                return await context.leadService.find(name, mobile, email, postcode);
            } catch (error) {
                throw new Error("Cannot find any lead that matches the search criteria")
            }
        }
    },
    Mutation: {
        register: async (_parent: unknown, _args: GetLeadsArgs, context: MainContext) => {
            try {
                const { name, email, mobile, postcode } = _args;
                await context.leadService.create({ name, email, mobile, postcode });
                return "Lead registered successfully";
            } catch (error) {
                throw new Error("Cannot register lead")
            }
        }
    }
};

