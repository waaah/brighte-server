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

    enum Services {
        delivery
        pickup
        payment
    }

    type Query {
        lead(id: ID!): Lead
        leads(
            name: String, 
            email: String, 
            mobile: String, 
            postcode: String,
            services: [Services]
        ): [Lead]
    }

    type Mutation {
        register(
            name: String!
            email: String!
            mobile: String!
            postcode: String!
            services: [Services]!
        ): String
    }
`;

export default leadTypeDefs;