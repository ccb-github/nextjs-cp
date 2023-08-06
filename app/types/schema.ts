import { BSON } from "realm-web";
//TODO with different shape
export interface SchemaPropties {
  defaultValue?: any;
  min?: number;
  name: string;
  optional: boolean;
  type: PropType;
  indexed: boolean;
  mapTo: string;
  objectType?: SchemaName;
}
//TODO keep two field exclusive
type PropType =
  | "double"
  | "int"
  | "objectType"
  | "string"
  | "objectId"
  | "object"
  | "date"
  | "list"
  | "uuid"
  | "bool"
  | "select";

//Mongodb has two types of schema(one embedded for sub data purly exists for main data, other one normal)
export type EmbeddedSchemaName = "Location" | "Qrcode"

export type NormalSchemaName =
  | "Enterprise"
  | "Order"
  | "Product"
  | "Checker"
  | "Regulatory"
  | "Category";

export type SchemaName = EmbeddedSchemaName | NormalSchemaName

export interface SchemaObject {
  name: SchemaName;
  primaryKey: string;
  embedded: boolean;
  properties: {
    _id: SchemaPropties;
    [key: string]: SchemaPropties;
  };
}

export type SchemaJson = {
  [key in SchemaName]: SchemaObject;
};

type Email = string;

// export namespace SchemaResultMapper {
//   export type Checker = {
//     _id: BSON.ObjectID;
//     address?: string;
//     belong?: Regulatory;
//     email: string;
//     name?: string;
//     ownerId: string;
//   };

//   export const CheckerSchema = {
//     name: "Checker",
//     primaryKey: "_id",
//     properties: {
//       _id: "objectId",
//       address: "string?",
//       belong: "Regulatory",
//       email: "string",
//       name: "string?",
//       ownerId: "string",
//     },
//   };

//   export type Enterprise = {
//     _id: BSON.ObjectID;
//     address?: string;
//     createdAt: Date;
//     creditCode: string;
//     description: string;
//     email?: string;
//     name?: string;
//     ownerId: string;
//     registerPlace: string;
//     tradeMark?: string;
//   };

//   export const EnterpriseSchema = {
//     name: "Enterprise",
//     primaryKey: "_id",
//     properties: {
//       _id: "objectId",
//       address: "string?",
//       createdAt: "date",
//       creditCode: "string",
//       description: "string",
//       email: "string?",
//       name: "string?",
//       ownerId: "string",
//       registerPlace: "string",
//       tradeMark: "string?",
//     },
//   };

//   export type Location = {
//     latitude: number;
//     longitude: number;
//   };

//   export const LocationSchema = {
//     name: "Location",
//     embedded: true,
//     properties: {
//       latitude: "float",
//       longitude: "float",
//     },
//   };

//   export type Order = {
//     _id: BSON.ObjectID;
//     customerId: string;
//     orderTime: Date;
//     products: Array<Product>;
//   };

//   export const OrderSchema = {
//     name: "Order",
//     primaryKey: "_id",
//     properties: {
//       _id: "uuid",
//       customerId: "string",
//       orderTime: "date",
//       products: "Product[]",
//     },
//   };

//   export type Part = {
//     _id: BSON.ObjectID;
//     manufacturer?: Enterprise;
//   };

//   export const PartSchema = {
//     name: "Part",
//     primaryKey: "_id",
//     properties: {
//       _id: "objectId",
//       manufacturer: "Enterprise",
//     },
//   };

//   export type Producer = {
//     _id: BSON.ObjectID;
//     description: string;
//     location?: Location;
//     ownerId: string;
//   };

//   export const ProducerSchema = {
//     name: "Producer",
//     primaryKey: "_id",
//     properties: {
//       _id: "objectId",
//       description: "string",
//       location: "Location",
//       ownerId: "string",
//     },
//   };

//   export type Product = {
//     _id: BSON.ObjectID;
//     assemlePlace?: string;
//     catgory: string;
//     checker?: Checker;
//     description: string;
//     name: string;
//     ownerId: string;
//     produceDay: Date;
//     producer?: Enterprise;
//     shelfLife: number;
//     standard: string;
//     status: boolean;
//   };

//   export const ProductSchema = {
//     name: "Product",
//     primaryKey: "_id",
//     properties: {
//       _id: "objectId",
//       assemlePlace: "string?",
//       catgory: "string",
//       checker: "Checker",
//       description: "string",
//       name: "string",
//       ownerId: "string",
//       produceDay: "date",
//       producer: "Enterprise",
//       shelfLife: "int",
//       standard: "string",
//       status: "bool",
//     },
//   };

//   export type Qrcode = {
//     value: string;
//   };

//   export const QrcodeSchema = {
//     name: "Qrcode",
//     embedded: true,
//     properties: {
//       value: "string",
//     },
//   };

//   export type Record = {
//     _id: BSON.ObjectID;
//     code?: Qrcode;
//     createdAt: Date;
//     description: string;
//     isVerified: boolean;
//     location?: Location;
//     ownerId: string;
//     url: string;
//   };

//   export const RecordSchema = {
//     name: "Record",
//     primaryKey: "_id",
//     properties: {
//       _id: "objectId",
//       code: "Qrcode",
//       createdAt: "date",
//       description: "string",
//       isVerified: "bool",
//       location: "Location",
//       ownerId: "string",
//       url: "string",
//     },
//   };

//   export type Regulatory = {
//     _id: BSON.ObjectID;
//     address?: string;
//     creditCode: string;
//     description: string;
//     name?: string;
//     ownerId: string;
//   };

//   export const RegulatorySchema = {
//     name: "Regulatory",
//     primaryKey: "_id",
//     properties: {
//       _id: "objectId",
//       address: "string?",
//       creditCode: "string",
//       description: "string",
//       name: "string?",
//       ownerId: "string",
//     },
//   };

//   export type User = {
//     _id?: BSON.ObjectID;
//     _userId?: string;
//     email?: string;
//     emailVerified?: boolean;
//     followers?: number;
//     image?: string;
//     name?: string;
//     role?: string;
//     username?: string;
//   };

//   export const UserSchema = {
//     name: "User",
//     primaryKey: "_id",
//     properties: {
//       _id: "objectId?",
//       _userId: "string?",
//       email: "string?",
//       emailVerified: "bool?",
//       followers: "int?",
//       image: "string?",
//       name: "string?",
//       role: "string?",
//       username: "string?",
//     },
//   };

//   export const Schema = [
//     CheckerSchema,
//     EnterpriseSchema,
//     LocationSchema,
//     OrderSchema,
//     PartSchema,
//     ProducerSchema,
//     ProductSchema,
//     QrcodeSchema,
//     RecordSchema,
//     RegulatorySchema,
//     UserSchema,
//   ];
// }
export namespace SchemaTypeSet {
  type Checker = {
    _id: BSON.ObjectID;
    address?: string;
    belong?: Regulatory;
    email: string;
    name?: string;
    ownerId: string;
  };

 

  type Enterprise = {
    _id: BSON.ObjectID;
    address?: string;
    createdAt: Date;
    creditCode: string;
    description: string;
    email?: string;
    name?: string;
    ownerId: string;
    registerPlace: string;
    tradeMark?: string;
  };
 
  type Location = {
    latitude: number;
    longitude: number;
  };

 

  type Order = {
    _id: BSON.ObjectID;
    customerId: string;
    orderTime: Date;
    products: Array<Product>;
  };


  type Regulatory = {
    _id: BSON.ObjectID;
  }
  
  type Producer = {
    _id: BSON.ObjectID;
    description: string;
    location?: Location;
    ownerId: string;
  };

  type Category = {
    _id: BSON.ObjectID;
    description: string;
    name: string;
    
  }
  type Product = {
    _id: BSON.ObjectID;
    assemlePlace?: string;
    catgory: string;
    checker?: Checker;
    description: string;
    name: string;
    ownerId: string;
    produceDay: Date;
    producer?: Enterprise;
    shelfLife: number;
    standard: string;
    status: boolean;
  };

 

  type Qrcode = {
    value: string;
  };

 

  type Record = {
    _id: BSON.ObjectID;
    code?: Qrcode;
    createdAt: Date;
    description: string;
    isVerified: boolean;
    location?: Location;
    ownerId: string;
    url: string;
  };
}

export type SchemaResultMapper = {
  Checker : {
    _id: BSON.ObjectID;
    address?: string;
    belong?: SchemaResultMapper["Regulatory"];
    email: string;
    name?: string;
    ownerId: string;
  };

 

  Enterprise : {
    _id: BSON.ObjectID;
    address?: string;
    createdAt: Date;
    creditCode: string;
    description: string;
    email?: string;
    name?: string;
    ownerId: string;
    registerPlace: string;
    tradeMark?: string;
  };
 
  Location: {
    latitude: number;
    longitude: number;
  };

  Order:{
    _id: BSON.ObjectID;
    customerId: string;
    orderTime: Date;
    products: Array<SchemaResultMapper["Product"]>;
  };

  OrderSchema : {
    name: "Order",
    primaryKey: "_id",
    properties: {
      _id: "uuid",
      customerId: "string",
      orderTime: "date",
      products: "Product[]",
    },
  };

  Regulatory: {
    _id: BSON.ObjectID;
    name?: string
  }, 
  Producer: {
    _id: BSON.ObjectID;
    description: string;
    location?: Location;
    ownerId: string;
  };

  Category: {
    _id: BSON.ObjectID;
    description: string;
    name: string;
    
  };
  Product: {
    _id: BSON.ObjectID;
    assemblePlace?: string;
    catgory: string;
    checker?: SchemaResultMapper["Checker"];
    description: string;
    name: string;
    ownerId: string;
    produceDay: Date;
    producer?: SchemaResultMapper["Enterprise"];
    shelfLife: number;
    standard: string;
    status: boolean;
  };

  Qrcode : {
    value: string;
  };

  Record: {
    _id: BSON.ObjectID;
    code?: SchemaResultMapper["Qrcode"];
    createdAt: Date;
    description: string;
    isVerified: boolean;
    location?: Location;
    ownerId: string;
    url: string;
  };
}
export type SearchResultMap = Map<
  string,
  SchemaName | SchemaResultMapper[SchemaName]
>;
// export namespace DBResult {
// 	type Enterprise = {
// 		_id: BSON.ObjectID;
// 		address: string;
// 		createdAt: Date;
// 		creditCode: string;
// 		description: string;
// 		email: Email;
// 		name: string;
// 		registerPlace: string;
// 		tradeMark: string
// 	}
// }
