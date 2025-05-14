import { MainContext } from "../types/main.context";

export const createBaseResolver = (
    validator: Validator // ,
    fn: (_parent: unknown, _args: Object, _context: MainContext)
) => {

    return fn(_parent, _args, _context)
};
