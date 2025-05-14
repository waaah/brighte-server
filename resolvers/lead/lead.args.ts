export type GetLeadArgs = {
    id: number;
}

export type GetLeadsArgs = {
    name?: string;
    mobile?: string;
    email?: string;
    postcode?: string;
}

export type RegisterLeadArgs = {
    name: string;
    mobile: string;
    email: string;
    postcode: string;
}