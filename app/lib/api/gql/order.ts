import { gql } from "@apollo/client";

export const GET_ALL_ORDERS = gql`
  query allOrders {
    orders{
      customerId,
      orderTime,
      products{
        name
      }
      # Related products
    }
  }
`;