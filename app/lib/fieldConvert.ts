//@ts-nocheck
import { BSON } from 'realm-web'
import type{ Realm} from 'realm-web'
import { PropertyType } from 'realm';

export default fieldConvert

function fieldConvert(field, type: PropertyType) {
    switch (type) {
        case "int":
            return intConvert(field);
        case "double":
            return floatConvert(field);
        case "date":
            return dateConvert(field);
        case "objectId":
            return objectIdConvert(field); 
        case "bool":
            return booleanConvert(field); 
        case "object":
            return field.length === 0 ? null : JSON.parse(field)
		default:
            return otherConvert(field);
    }
        
}

function dateConvert(prop) {
    //TODO deal with invalid date
    return new Date(prop);
}
function intConvert(prop) {
    return Number.parseInt(prop);
}
function floatConvert(prop) {
    return Number.parseFloat(prop);
}
function booleanConvert(prop) {
    //TODO deal with invalid boolean
    return prop === "true" 
}

function otherConvert(prop) {
    return prop;
}
function objectIdConvert(prop) {
    return BSON.ObjectId(prop);
}

export { 
    booleanConvert, dateConvert, intConvert, objectIdConvert, 
    otherConvert, floatConvert
}