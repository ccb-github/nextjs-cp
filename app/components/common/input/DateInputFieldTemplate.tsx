"use client"
import { SchemaPropties } from "#/types/schema"
import { useState } from "react"
import { FiRefreshCw } from "react-icons/fi"
import Button from "../Button"
import TypeSpan from "./TypeSpan"

export default function DateInputFieldTemplate(props: SchemaPropties) {
    const [currentTime, refreshTime] = useState(new Date().toISOString().slice(0, -1))
    return (
      <div key={props.name} className="form-group">
        <div className="p-4">
          <label className=" control-label" htmlFor="prop.name">
            {props.optional ? null :"*" }{props.name}
          </label>
          <TypeSpan text='date' className='float-right'/>
          
          <Button text={"refresh"} className='float-right' onClick={() => {
            refreshTime(new Date().toISOString().slice(0, -1))
          }}>
            <FiRefreshCw className="w-4 inline-block"/>
          </Button>
        </div>
        <div className="">
          <input
            id={props.name}
            name={props.name}
            type="datetime-local"
            value={currentTime}
            onChange={(event) => {
              //defaultValue={currentTime}
              refreshTime(event.currentTarget.value)
            }}
            className="form-control input-md w-full"
            required={props.optional}
          />
        </div>
      </div>
    )
  }