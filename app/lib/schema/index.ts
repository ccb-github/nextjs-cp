import { SchemaJson } from "#/types/schema";
import Category from "./category";
import Checker from "./checker";
import Enterprise from "./enterprise";
import Product from "./product"
export const schemaJson: SchemaJson = {
  Category,
	Checker,
	Enterprise,
	Product,
	Order: {
	  name: "Order",
	  properties: {
		_id: {
		  name: "_id",
		  type: "uuid",
		  indexed: true,
		  optional: false,
		  mapTo: "_id",
		},
		customerId: {
		  name: "customerId",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "customerId",
		},
		orderTime: {
		  name: "orderTime",
		  type: "date",
		  indexed: false,
		  optional: false,
		  mapTo: "orderTime",
		},
		products: {
		  name: "products",
		  type: "list",
		  objectType: "Product",
		  indexed: false,
		  optional: false,
		  mapTo: "products",
		},
	  },
	  primaryKey: "_id",
	  embedded: false,
	},

	Part: {
	  name: "Part",
	  properties: {
		_id: {
		  name: "_id",
		  type: "objectId",
		  indexed: true,
		  optional: false,
		  mapTo: "_id",
		},
		manufacturer: {
		  name: "manufacturer",
		  type: "object",
		  objectType: "Enterprise",
		  indexed: false,
		  optional: true,
		  mapTo: "manufacturer",
		},
	  },
	  primaryKey: "_id",
	  embedded: false,
	},
	Producer: {
	  name: "Producer",
	  properties: {
		_id: {
		  name: "_id",
		  type: "objectId",
		  indexed: true,
		  optional: false,
		  mapTo: "_id",
		},
		description: {
		  name: "description",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "description",
		},
		location: {
		  name: "location",
		  type: "object",
		  objectType: "Location",
		  indexed: false,
		  optional: true,
		  mapTo: "location",
		},
		ownerId: {
		  name: "ownerId",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "ownerId",
		},
	  },
	  primaryKey: "_id",
	  embedded: false,
	},

	Record: {
	  name: "Record",
	  properties: {
		_id: {
		  name: "_id",
		  type: "objectId",
		  indexed: true,
		  optional: false,
		  mapTo: "_id",
		},
		code: {
		  name: "code",
		  type: "object",
		  objectType: "Qrcode",
		  indexed: false,
		  optional: true,
		  mapTo: "code",
		},
		createdAt: {
		  name: "createdAt",
		  type: "date",
		  indexed: false,
		  optional: false,
		  mapTo: "createdAt",
		},
		description: {
		  name: "description",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "description",
		},
		isVerified: {
		  name: "isVerified",
		  type: "bool",
		  indexed: false,
		  optional: false,
		  mapTo: "isVerified",
		},
		location: {
		  name: "location",
		  type: "object",
		  objectType: "Location",
		  indexed: false,
		  optional: true,
		  mapTo: "location",
		},
		ownerId: {
		  name: "ownerId",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "ownerId",
		},
		url: {
		  name: "url",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "url",
		},
	  },
	  primaryKey: "_id",
	  embedded: false,
	},
	Regulatory: {
	  name: "Regulatory",
	  properties: {
		_id: {
		  name: "_id",
		  type: "objectId",
		  indexed: true,
		  optional: false,
		  mapTo: "_id",
		},
		address: {
		  name: "address",
		  type: "string",
		  indexed: false,
		  optional: true,
		  mapTo: "address",
		},
	
		description: {
		  name: "description",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "description",
		},
		name: {
		  name: "name",
		  type: "string",
		  indexed: false,
		  optional: true,
		  mapTo: "name",
		},
		ownerId: {
		  name: "ownerId",
		  type: "string",
		  indexed: false,
		  optional: false,
		  mapTo: "ownerId",
		},
	  },
	  primaryKey: "_id",
	  embedded: false,
	},
}