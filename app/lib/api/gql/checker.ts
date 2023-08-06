import { gql } from "@apollo/client";

export const GET_ALL_CHECKERS = gql`
  query getAllCheckers {
    checkers {
      _id
      address
      belong
      email
      name
    }
  }
`;