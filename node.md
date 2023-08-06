### Apply type for csscolor in reactjs
[Reference doc](https://fettblog.eu/typescript-react/styles/)
```typescript
  
  const fooSchema = {
    name: <schemaName>,
    //key is the property name
    properties: {[key: string]: <SchemaProptery>}
  }
  type SchemaProptery = {
      name: "description",
      type: "string",
      indexed: <boolean>,
      //Is the proptery required
      optional: <boolean>,
      mapTo: "description",
  }
```