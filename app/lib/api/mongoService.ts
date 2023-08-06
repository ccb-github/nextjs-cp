import { SchemaName, SchemaObject } from "#/types/schema";
import { schemaJson } from "#/lib/schema";
if(process.env.NEXT_PUBLIC_MONGODB_ATLA_DATABASE === undefined) {
  console.log(process.env)
  throw Error("Missing env varaiable MONGODB_ATLA_DATABASE")
}
const DB_NAME = process.env.NEXT_PUBLIC_MONGODB_ATLA_DATABASE


export async function getUsers(realmUser: Realm.User, filter?: Realm.Services.MongoDB.Filter): Promise<any | null> {
  const collection = realmUser
    .mongoClient('mongodb-atlas')
    .db(DB_NAME!)
    .collection('User')
  const results = await collection.find(
    filter
  );
  if (results) {
    return results
  } else {
    return null;
  }
}



export async function getData(realmUser: Realm.User, schemaName: SchemaName,filter?: Realm.Services.MongoDB.Filter): Promise<any | null> {
  const collection = realmUser
    .mongoClient('mongodb-atlas')
    .db(DB_NAME!)
    .collection(schemaName)
  const results = await collection.findOne(
    filter
  );
  if (results) {
    return results
  } else {
    return null;
  }
}
/**
 * 
 * @param realmUser: The realm user which do the operation 
 * @param filter 
 * @returns 
 */
export async function getUser(realmUser: Realm.User, filter?: Realm.Services.MongoDB.Filter): Promise<any | null> {
  const collection = realmUser
    .mongoClient('mongodb-atlas')
    .db(DB_NAME!)
    .collection('User')
  const results = await collection.findOne(
    filter
  );
  if (results) {
    return results
  } else {
    return null;
  }
}

export async function insertDataToCol(
  user: Realm.User,
  name: SchemaName,
  insertDoc: Realm.Services.MongoDB.NewDocument< SchemaObject["properties"] >,
){
  typeof schemaJson[name].properties 
  const insertCollection = user
    ?.mongoClient('mongodb-atlas')
    .db(DB_NAME!)
    .collection(name)
  try {
    const result = await insertCollection.insertOne(insertDoc)
    return result
  } catch (error) {
    throw error
  }
}

export async function updateCollection(
  user: Realm.User,
  name: SchemaName,
  filter: Realm.Services.MongoDB.Filter,
  updateDoc: any,
) {
  const updateCollection = user
    ?.mongoClient('mongodb-atlas')
    .db(DB_NAME!)
    .collection(name)
  try {
    const result = await updateCollection.updateMany(filter, {
      $set: updateDoc,
    })
  } catch (error) {
    alert(error)
    throw error
  }
}

export  async function deleteDocuments(user: Realm.User, name: SchemaName, filter: Realm.Services.MongoDB.Filter){
  const updateCollection = user?.mongoClient('mongodb-atlas').db('qrcodeTraceability').collection(name);
  try {
    const result = await updateCollection.deleteMany(
      filter
    )      
  } catch (error) {
    throw error
  }
}

