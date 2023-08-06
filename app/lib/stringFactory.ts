import { SchemaName } from "#/types/schema"

export function toSchemaTypestring( str: string ): SchemaName {
  
  return `${str[0].toUpperCase()}${str.slice(1)}` as SchemaName
}