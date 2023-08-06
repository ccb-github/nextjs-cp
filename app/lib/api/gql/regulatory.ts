import { gql } from "@apollo/client";

export const FIND_REGULATORY = gql`
  query findRegulatory($query: RegulatoryQueryInput){
    regulatory(query: $query){
      _id
      name,
      creditCode,
      address,
      description    
    }
  }
`

export const UPDATE_REGULATORIES = gql`
  mutation updateRegulatories($query: RegulatoryUpdateInput!, $set: RegulatoryUpdateInput!){
    updateManyRegulatories(query: $query, set: $set){
      _id
      address
      description
      name
    }
  }
`

export const FIND_REGULATORIES = gql`
  query findRegulatories($query: RegulatoryQueryInput){
    regulatories(query: $query){
      _id
      name,
      creditCode,
      address,
      description    
    }
  }
`