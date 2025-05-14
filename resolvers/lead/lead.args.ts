import { ServiceTypes } from "../../types/service-type";

export type GetLeadArgs = {
  id: number;
};

export type GetLeadsArgs = {
  services?: ServiceTypes[];
};

export type RegisterLeadArgs = {
  name: string;
  mobile: string;
  email: string;
  postcode: string;
  services: ServiceTypes[];
};
