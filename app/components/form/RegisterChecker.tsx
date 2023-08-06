//@ts-nocheck
"use client";
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
import { insertDataToCol } from "#/lib/api/mongoService";


import ModalQRCodeDialog from "./ModalQRCodeDialog";
import type { SchemaName } from "../../types/schema";
import templateHtml from "../../lib/formTemplate";

export default function RegisterChecker({
  type,
  lng,
}: {
  lng: string;
  type: SchemaName;
}) {
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
            <option value="6388ca5ca8be8a4d5e7aa622">
              6388ca5ca8be8a4d5e7aa622
            </option>
            <option value="638d44e279244c97fe5aee44">
              638d44e279244c97fe5aee44
            </option>
            <option value="638d6ab669552a3ddc6405bc">
              638d6ab669552a3ddc6405bc
            </option>
            <option value="638d71bb69552a3ddc6405c1">
              638d71bb69552a3ddc6405c1
            </option>
            <option value="638d751a69552a3ddc6405c6">
              638d751a69552a3ddc6405c6
            </option>
            <option value="638d787569552a3ddc6405cc">
              638d787569552a3ddc6405cc
            </option>
            <option value="638d84373f19ebbaeece05e7">
              638d84373f19ebbaeece05e7
            </option>
            <option value="638d975559b087e2205a93c0">
              638d975559b087e2205a93c0
            </option>
            <option value="638df57d4ec22094cfed9ec9">
              638df57d4ec22094cfed9ec9
            </option>
            <option value="638df7d52c54d98e9555a38d">
              638df7d52c54d98e9555a38d
            </option>
            <option value="638dfa36002da26152156145">
              638dfa36002da26152156145
            </option>
            <option value="638dfaccfdf0b8527e235301">
              638dfaccfdf0b8527e235301
            </option>
            <option value="638e913daacbea94b60b0378">
              638e913daacbea94b60b0378
            </option>
            <option value="638e92d7d79503e41df02231">
              638e92d7d79503e41df02231
            </option>
            <option value="638e94b97dbc7b8fee63f6f9">
              638e94b97dbc7b8fee63f6f9
            </option>
            <option value="638e957d7dbc7b8fee63f6fe">
              638e957d7dbc7b8fee63f6fe
            </option>
            <option value="638e96c47dbc7b8fee63f703">
              638e96c47dbc7b8fee63f703
            </option>
            <option value="638ebe2986e4c3fe13af83ec">
              638ebe2986e4c3fe13af83ec
            </option>
            <option value="638ec2692cfb6f58c6fbf160">
              638ec2692cfb6f58c6fbf160
            </option>
            <option value="638ec6af2cfb6f58c6fbf165">
              638ec6af2cfb6f58c6fbf165
            </option>
            <option value="638ec6d92cfb6f58c6fbf16a">
              638ec6d92cfb6f58c6fbf16a
            </option>
            <option value="638ec8aa2cfb6f58c6fbf16f">
              638ec8aa2cfb6f58c6fbf16f
            </option>
            <option value="638eca5b80632d22b0148b8b">
              638eca5b80632d22b0148b8b
            </option>
            <option value="638ecabf80632d22b0148b90">
              638ecabf80632d22b0148b90
            </option>
            <option value="638ecad280632d22b0148b95">
              638ecad280632d22b0148b95
            </option>
            <option value="638ecaec80632d22b0148b9a">
              638ecaec80632d22b0148b9a
            </option>
            <option value="638ecc2080632d22b0148b9f">
              638ecc2080632d22b0148b9f
            </option>
            <option value="638ecced80632d22b0148ba4">
              638ecced80632d22b0148ba4
            </option>
            <option value="638ecd5e80632d22b0148ba9">
              638ecd5e80632d22b0148ba9
            </option>
            <option value="638ecd7480632d22b0148bae">
              638ecd7480632d22b0148bae
            </option>
            <option value="638ecdc480632d22b0148bb3">
              638ecdc480632d22b0148bb3
            </option>
            <option value="638ece4780632d22b0148bb8">
              638ece4780632d22b0148bb8
            </option>
            <option value="638ece4f80632d22b0148bbd">
              638ece4f80632d22b0148bbd
            </option>
            <option value="638ecea580632d22b0148bc2">
              638ecea580632d22b0148bc2
            </option>
            <option value="638ecf9d80632d22b0148bc7">
              638ecf9d80632d22b0148bc7
            </option>
            <option value="638ef4df7622c8f351328157">
              638ef4df7622c8f351328157
            </option>
            <option value="638ef85c144ea6dfa3a90349">
              638ef85c144ea6dfa3a90349
            </option>
            <option value="638ef928c28443345d5165a1">
              638ef928c28443345d5165a1
            </option>
            <option value="638ef9aa3ca86dbba354d35e">
              638ef9aa3ca86dbba354d35e
            </option>
            <option value="638f04b13ca86dbba354d363">
              638f04b13ca86dbba354d363
            </option>
            <option value="638f2db2b4cbc0f7b72f5762">
              638f2db2b4cbc0f7b72f5762
            </option>
            <option value="6393f3734d325af33daadd27">
              6393f3734d325af33daadd27
            </option>
            <option value="6393f59d6ee9268eb8ae5497">
              6393f59d6ee9268eb8ae5497
            </option>
            <option value="6394552425782866aa884c9d">
              6394552425782866aa884c9d
            </option>
            <option value="63945adbd35d5267fef72c3f">
              63945adbd35d5267fef72c3f
            </option>
            <option value="6396e55d5c436ba7333edea5">
              6396e55d5c436ba7333edea5
            </option>
            <option value="6396e5685c436ba7333edeab">
              6396e5685c436ba7333edeab
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
