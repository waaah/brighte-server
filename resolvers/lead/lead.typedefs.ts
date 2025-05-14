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
        services: [Service]!
    }

    type Service {
        name: ServiceType
    }

    enum ServiceType {
        delivery
        pickup
        payment
    }

    type Query {
        lead(id: ID!): Lead
        leads(services: [ServiceType]): [Lead]
    }

    type Mutation {
        register(
            name: String!
            email: String!
            mobile: String!
            postcode: String!
            services: [ServiceType]!
        ): String
    }
`;

export default leadTypeDefs;
