//@ts-nocheck
"use client";
//TODO type check
import { useApp } from "#/hooks/useApp";
import useDataList from "#/hooks/useDataList";
import fieldConvert, { objectIdConvert } from "#/lib/fieldConvert";

import React, {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { BSON } from "realm-web";

import type { SchemaName, SchemaObject, SchemaPropties } from "types/schema";

import { schemaJson } from "#/lib/schema";


import ModalQRCodeDialog from "./ModalQRCodeDialog";
import type { SchemaName } from "../../types/schema";
import templateHtml from "../../lib/formTemplate";

export function RegisterEnterpriseForm({ lng }: { lng: string }) {
  return (
    <form
      method="post"
      action="#"
      id="registerForm"
      className="h-full overflow-y-scroll pt-2"
    >
      <div className="form-group">
        <label className=" control-label" htmlFor="address">
          address
        </label>
        <div className=" w-full">
          <input
            id="address"
            name="address"
            type="text"
            placeholder="please Enter your address here"
            className="form-control input-md w-full"
          />
        </div>
      </div>
      <div className="form-group">
        <label className=" control-label" htmlFor="belong">
          belong{" "}
        </label>
        <div className=" w-full flex-row">
          <select className="flex-1 w-4/5">
            <option value="6388c9f7fa298e1e94321099">
              6388c9f7fa298e1e94321099
            </option>
            <option value="6423e62fcc0427bde8a2dd36">Regulatory 1</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label className=" control-label" htmlFor="email">
          email
        </label>
        <div className=" w-full">
          <input
            id="email"
            name="email"
            type="text"
            placeholder="please Enter your email here"
            className="form-control input-md w-full"
            required=""
          />
        </div>
      </div>
      <div className="form-group">
        <label className=" control-label" htmlFor="name">
          name
        </label>
        <div className=" w-full">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="please Enter your name here"
            className="form-control input-md w-full"
          />
        </div>
      </div>
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default function RegisterUserForm({
  type,
  lng,
}: {
  lng: string;
  type: SchemaName;
}) {
  const mongodbApp = useApp();
  //TODO we need type
  const schemaObj = schemaJson[type];

  useEffect(() => {});

  const customField = async () => {
    insertData.current._id = new BSON.ObjectId();
    Object.defineProperty(insertData.current, "_id", {
      writable: true,
      enumerable: true,
      value: new BSON.ObjectId(),
    });
  };

  const submitForm = async (submitEvent: FormEvent<HTMLFormElement>) => {
    try {
      submitEvent.preventDefault();
      //@ts-ignore submitEvent: FormEvent<HTMLFormElement>
      const eventForm: HTMLFormElement = submitEvent.target;
      const FD = new FormData(eventForm);
      console.log(FD);
      const mongoCollection = mongodbApp?.currentUser
        ?.mongoClient("mongodb-atlas")
        .db("qrcodeTraceability")
        .collection(schemaObj.name);
      for (let item of FD.entries()) {
        Object.defineProperty(insertData.current, item[0], {
          writable: true,
          enumerable: true,
          value: fieldConvert(item[1], schemaObj.properties[item[0]].type),
        });
      }
      insertData.current._id = new BSON.ObjectId();

      if (Object.keys(schemaObj.properties).includes("ownerId")) {
        insertData.current.ownerId = mongodbApp.currentUser?.id;
      }

      // const result = insertDataToCol(mongodbApp.currentUser, "Product", {...insertData.current,
      //  checker: undefined,
      //  producer: undefined
      // })

      //console.table(result)
      setQRCodeMessage(JSON.stringify(insertData.current));
    } catch (error: any) {
      if (error.message) {
        //@ts-ignore
        alert(error.message);
      }
      submitEvent.preventDefault();
      throw error;
    }
  };

  return (
    <form
      method="post"
      action="#"
      id="insertForm"
      onSubmit={submitForm}
      className="h-full overflow-y-scroll
			             pt-2"
    >
      {Object.keys(schemaObj.properties).map((e) =>
        templateHtml(schemaObj.properties[e])
      )}
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

