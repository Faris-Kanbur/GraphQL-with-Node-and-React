const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String!
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  # Object type for products
  # ın Prodcut we are going to have one Category for prodcut(one product just can take part in one Catergory) so we are define array for products
  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category
    reviews: [Reviews!]!
  }

  #Category
  # ın Category we are going to have more than one product for one Category so we are define array for products
  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Reviews {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }
`;
