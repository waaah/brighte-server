import { Lead } from "../../schema/db/entity/Lead";
import { ServiceTypes } from "../../types/service-type";

export type CreateLeadDTO = Omit<Lead, "services"> & {
  services: ServiceTypes[];
};

export type FindLeadDTO = {
  services?: ServiceTypes[];
};
