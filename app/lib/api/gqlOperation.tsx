import { SchemaName } from "#/types/schema";
import { ApolloClient, InMemoryCache, HttpLink, gql, DocumentNode } from "@apollo/client";
import { getCookieByName } from "#/components/util/cookie";
import { BSON } from "realm-web"
import * as Realm from "realm-web";
import { SchemaResultMapper } from "#/types/schema";
import { FIND_REGULATORIES, UPDATE_REGULATORIES } from "./gql/regulatory";
import { FIND_PRODUCTS, GET_PRODUCT_BY_ID } from "./gql/product";
import { GET_ALL_ENTERPRISES, GET_ENTERPRISE_BY_ID, UPDATE_ENTERPRISE } from "./gql/enterprise";
import { GET_ALL_ORDERS } from "./gql/order";

// 1. Function to create GraphQL client//"https://realm.mongodb.com/api/client/v2.0/app/application-parking-apwzf/graphql", 
//TODO type for token "https://main--time-pav6zq.apollographos.net/graphql", 
export const createClient = (token: string) => {
  //console.log(`Create client ${token}`);
  console.group()

  console.log(token, new Date().toISOString())
  // const app = new Realm.App("application-qrcode-ukplu")
  // console.log(app.currentUser?.accessToken)
  console.groupEnd()
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    cache: new InMemoryCache(),

    ssrMode: true,
  });
};


export async function getCatgories(token: string) {
  try {
    const client = createClient(getCookieByName("accessToken")!);
   
    const {
      data
    } = await client.query({
      query: gql`
        query getCatgories{
          catgories{
            name
            description
          }
        }
      `, 
    });
    return data
  } catch (error) {
    console.log("The error happened")
    throw error
  }
}

export async function addCategory(newCatgory: any) {
  try {
    const client = createClient(getCookieByName("accessToken")!);
    const {
      data
    } = await client.mutate({
      mutation: ADD_NEWCATEGORY,
      variables: newCatgory
    })
    return data
  } catch (error) {
    console.log("The error happened")
    throw error
  }
}


export async function getOneProduct({
  query,
}: {
  query?: Partial<SchemaResultMapper["Product"]>;
}): Promise<{product: Partial<SchemaResultMapper["Product"]>}> {
  try {
    const client = createClient(getCookieByName("accessToken")!);
    const { data } = await client.query({
      query: GET_PRODUCT_BY_ID,
      variables: {
        query,
      },
    });
    return data;
  } catch (error) {
    console.log("The error happened");
    throw error;
  }
}



export async function getByName(token: string, name: string) {
  
  const client = createClient(getCookieByName("accessToken")!);
  const {
    data
  } = await client.query({
    query: getByNameGql(name)
  });
  console.log(data.length)
  return data
}

export async function getAllProducts() {
  try {
    const client = createClient(getCookieByName("accessToken")!);
    const { data } = await client.query({
      query: FIND_PRODUCTS,
    });
    console.log(data.length);
    return data;
  } catch (error) {
    console.log("The error happened");
    throw error;
  }
}

export async function updateEnterprise({query, set}:{
  query: Partial<SchemaResultMapper["Enterprise"]>, 
  set: Partial<SchemaResultMapper["Product"]>
}) {
  try {
    const client = createClient(getCookieByName("accessToken")!);
    const { data } = await client.mutate({
      mutation: UPDATE_ENTERPRISE, 
      variables: {
        query,
        set
      }
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log("The error happened");
    throw error;
  }
}

const getByNameGql = (name: string) => gql`
  query {
    ${name} {
      _id
      name
    }
  }
`


const ADD_NEWCATEGORY = gql`
  mutation addCategory(
    $name: String
    $_id: ObjectId
    $createdAt: DateTime
    $description: String
  ) {
    insertOneCatgory(
      data: {
        name: $name
        _id: $_id
        createdAt: $createdAt
        description: $description
      }
    ) {
      name
    }
  }
`;
  //
const getByNameAndFilterGql = (name: string) => {
  return gql`
    query getByNameAndFilter{
      ${name}{
        name
      }
    }
  `
}




export async function getEnterpriseById(id: string) {
  const client = createClient(getCookieByName("accessToken")!);
  const { data } = await client.query({
    query: GET_ENTERPRISE_BY_ID,
    variables: { id: new BSON.ObjectId(id) },
  });
  console.log(`The data in the query function ${JSON.stringify(data)}`)
  return data
}




//TODO type the filter
type GqlFilter = any
// export async function getByName(token: string, name: string, filter?: GqlFilter) {
//   //console.log(`The cookie at server side ${cookies().get('accessToken')?.value}`)
//   const client = createClient(getCookieByName("accessToken")!);
//   console.log("Important",getByNameAndFilterGql(name))
//   const {
//     data
//   } = await client.query({
//     query: getByNameAndFilterGql(name),

//   });
//   return data
// }

export async function getByNameAndFilter(token: string, name: string, filter?: GqlFilter) {
 
  const client = createClient(getCookieByName("accessToken")!);
  console.log("Important",getByNameAndFilterGql(name))
  const {
    data
  } = await client.query({
    query: getByNameAndFilterGql(name),

  });
  return data
}

export async function getAllEnterprises() {
  try {
    const client = createClient(getCookieByName("accessToken")!);
    const { data } = await client.query({
      query: GET_ALL_ENTERPRISES,
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllOrders() {
  const client = createClient(getCookieByName("accessToken")!);
  const {
    data 
  } = await client.query({
    query: GET_ALL_ORDERS,
    
  });
  return data
}
export async function getRegulatories({ query }: { query?: Pick<SchemaResultMapper["Regulatory"], keyof SchemaResultMapper["Regulatory"]>; }): Promise<{ regulatories: any; }> {
  try {
    const client = createClient(getCookieByName("accessToken")!);
    const {
      data
    } = await client.query({
      query: FIND_REGULATORIES,
      variables: {
        query
      }
    });
    return data;
  } catch (error) {
    console.log("The error happened");
    throw error;
  }

}

export async function updateRegulatories({
  query,
  set,
}: {
  query?: Partial<
    SchemaResultMapper["Regulatory"]  
  >;
  set?: Partial<SchemaResultMapper["Regulatory"]>;
}): Promise<{ regulatories: SchemaResultMapper["Regulatory"] }> {
  try {
    const client = createClient(getCookieByName("accessToken")!);
    const { data } = await client.mutate({
      mutation: UPDATE_REGULATORIES,
      variables: {
        query,
        set,
      },
    });
    return data;
  } catch (error) {
    console.log("The error happened");
    throw error;
  }
}
//TODO Type anyobject not any
export async function searchGql(accessToken: string, query: DocumentNode,
  variables?: any
){

}