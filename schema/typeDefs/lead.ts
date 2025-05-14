const leadTypeDefs = `#graphql 
    """
    A created sales lead.
    """
    type Lead {
        id: ID!
        name: String!
        email: String!
        mobile: String!
        postcode: String!
    }
    type Query {
        lead(id: ID!): Lead
        leads(
            name: String, 
            email: String, 
            mobile: String, 
            postcode: String
        ): [Lead]
    }

    type Mutation {
        register(
            name: String!
            email: String!
            mobile: String!
            postcode: String!
        ): String
    }
`;

export default leadTypeDefs;