import { gql } from "@apollo/client";

export const GET_ALL_CATGORIES = gql`
  query getAllCatgories {
    catgories {
      name
    }
  }
`;