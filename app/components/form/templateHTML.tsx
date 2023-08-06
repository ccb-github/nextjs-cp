import React from 'react';
import type { SchemaName, SchemaPropties } from '#/types/schema';
import RelatedObjSelect from '#/components/form/related/RelatedObjSelect';
import Button from '#/components/common/Button';
import DateInputFieldTemplate from '#/components/common/input/DateInputFieldTemplate';
import TypeSpan from '#/components/common/input/TypeSpan';
import IntInputFieldTemplate from '#/components/common/input/IntInputFieldTemplate';
import BooleanInputFieldTemplate from '#/components/common/input/BooleanInputFieldTemplate';
import { StringInputFieldTemplate } from '#/components/form/AddDataForm';

export function templateHTML(prop: SchemaPropties) {
  var DATE_FORMAT = 'YYYY-MM-DD HH:MM:SS';
  const DOUBLE_PRECISION = 0.0001;

  if (prop.name === 'ownerId') {
    return null;
  }
  else if (prop.type === 'int')
    return <IntInputFieldTemplate {...prop} key={prop.name} />;

  else if (prop.type === 'double') {
    return (
      <div key={prop.name} className="form-group">
        <div className="w-full p-4">
          <label className=" control-label" htmlFor={prop.name}>
            {prop.name}
          </label>
          <TypeSpan text='date' className='float-right' />
          <Button text='refresh' className='float-right'
            onClick={() => { }} />
        </div>
        <div className=" w-full">
          <input
            id={prop.name}
            name={prop.name}
            type="number"
            step={DOUBLE_PRECISION}
            required={prop.optional}
            placeholder={`please Enter your ${prop.name} here, presion up to ${DOUBLE_PRECISION}`}
            className="form-control input-md w-full" />
        </div>
      </div>
    );
  }
  else if (prop.type === 'date') {
    return <DateInputFieldTemplate key={prop.name} {...prop} />;
  } else if (prop.type === 'string') {
    return <StringInputFieldTemplate key={prop.name} {...prop} />;
  } else if (prop.type === 'bool') {
    return <BooleanInputFieldTemplate key={prop.name} {...prop} />;
  }
  else if (prop.type === 'list') {
    return (
      <div key={prop.name} className="form-group">
        <div className="w-full p-4">
          <label className="control-label" htmlFor={prop.name}>
            {prop.name}
          </label>
        </div>
        <div className="w-full">
          <input
            id={prop.name}
            name={prop.name}
            type="text"
            placeholder={`please Enter your ${prop.name} here`}
            className="form-control input-md w-full"
            required={!prop.optional} />
        </div>
      </div>
    );
  }
  else if (prop.type === 'select') {
    return (
      <div key={prop.name} className="form-group">
        <div className="w-full p-4">
          <label className="control-label" htmlFor={prop.name}>
            {prop.name}
          </label>
        </div>
        <div className="w-full">
          <RelatedObjSelect objectType={prop.objectType!}/>
        </div>
      </div>
    );
  }
  else if (prop.type === 'objectId') {
    return null;
  }
  else if (prop.type === 'object' && prop.objectType === 'Location') {
    return (
      <div key={prop.name} className="form-group">
        <div>
          <label className=" control-label" htmlFor={prop.name}>
            {prop.name}
          </label>
          <TypeSpan>location</TypeSpan>
        </div>
        <div className="w-full">
          <label
            className="control-label"
            htmlFor={`${prop.name}Longitude`}
          >{`${prop.name}.longitude`}
          <input
            id={`${prop.name}-longitude`}
            name={prop.name}
            type="text"
            placeholder={`please Enter your ${prop.name}.longtitude here, Location content, required=${prop.optional}`} />
          </label>
          <br/>
          <label className="control-label" htmlFor={`${prop.name}-latitude`}>
            latitude          
          </label>
          <input
            id={`${prop.name}-latitude`}
            name={`${prop.name}`}
            type="text"
            placeholder={`please Enter your ${prop.name} latitude here, Location content`} />
        </div>
      </div>
    );
  }

  // onclick="this.focus();this.select();"
  else if (prop.type === 'object' && prop.objectType === 'Qrcode') {
    return (
      <div key={prop.name} className="form-group">
        <label className=" control-label" htmlFor={`${prop.name}`}>
          {prop.name}
        </label>
        <div className=" w-full">
          <input
            id={prop.name}
            name={prop.name}
            type="textarea"
            placeholder={`please Enter your ${prop.name} here,generate qrcode base on the content entered   ${prop.optional ? '' : 'required'}`} />{' '}
        </div>
        <div id="qrcode" title="Preview of your qrcode"></div>
      </div>
    );
  } else {
    return (
      <div key={prop.name} className="form-group">
        <label className=" control-label" htmlFor={`${prop.name}`}>
          {prop.name}{' '}
        </label>
        <div className="w-full flex-row">
          <RelatedObjSelect
            objectType={prop.objectType as SchemaName}
            className="flex-1 w-full" />
        </div>
      </div>
    );
  }
}
