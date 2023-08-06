const Category = {
  name: "Category",
  type: "selectList",
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
    name: {
      name: "name",
      type: "string",
      indexed: false,
      optional: true,
      mapTo: "name",
    },
    createdAt: {
      name: "createdAt",
      type: "date",
      indexed: false,
      optional: false,
      mapTo: "createdAt",
    },
  },
  primaryKey: "_id",
  embedded: false,
};
export default Category