const Checker = {
  name: "Checker",
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
      defaultValue: "Default address",
      indexed: false,
      optional: true,
      mapTo: "address",
    },
    belong: {
      name: "belong",
      type: "object",
      objectType: "Regulatory",
      indexed: false,
      optional: true,
      mapTo: "belong",
    },
    email: {
      name: "email",
      type: "string",
      indexed: false,
      optional: false,
      mapTo: "email",
    },
    name: {
      name: "name",
      type: "string",
      indexed: false,
      optional: true,
      mapTo: "name",
    },

  },
  primaryKey: "_id",
  embedded: false,
}

export default Checker