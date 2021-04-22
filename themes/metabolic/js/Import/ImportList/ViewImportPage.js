import React, { useContext, useEffect, useState } from 'react';
import { ImportContext } from '../ImportContext';

import { getForm, getFormList, getSession } from '../ImportQueries';
const baseUrl = pawtucketUIApps.Import.data.baseUrl;

const ViewImportPage = (props) => {
  const { formData, setFormData, sessionKey, previousFilesUploaded, setPreviousFilesUploaded, schema, setSchema, formCode, setFormCode} = useContext(ImportContext);
  const [ schemaProperties, setSchemaProperties ] = useState();

  useEffect(() => {
    getFormList(baseUrl, function (data) {
      // console.log("formList: ", data);
      setFormCode(data.forms[0].code)
    })
  }, [])

  useEffect(() => {
    if (formCode !== null) {
      getForm(baseUrl, formCode, function (data) {
        // console.log("form: ", data);
        let form = { ...data }
        let jsonProperties = JSON.parse(data.properties);
        form.properties = jsonProperties;
        setSchema(form);
      })
    }
  }, [formCode]);

  useEffect(() => {
    if(schema){
      let keys = Object.keys(schema.properties);
      let values = Object.values(schema.properties);
      var result = {};
      keys.forEach((key, i) => result[key] = values[i].title);
      setSchemaProperties(result);
    }
  }, [schema])

  useEffect(() => {
    if (sessionKey !== null) {
      getSession(baseUrl, sessionKey, function (data) {
        console.log("getSession: ", data);
        if (data.formData !== "null") {
          let prevFormData = JSON.parse(data.formData);
          // console.log('prev formData: ', prevFormData);
          setFormData(Object.entries(prevFormData));

          // Set list of previously uploaded files (not all are necessarily complete, and user may need to restart uploads)
          setPreviousFilesUploaded(data.filesUploaded);
        }
      })
    }
  }, [])

  let prevFiles = [];
  if (previousFilesUploaded.length > 0) {
    for (let i in previousFilesUploaded) {
      prevFiles.unshift(previousFilesUploaded[i].name);
    }
  }

  if(formData !== null && schemaProperties){
    return (
      <div className='container-fluid' style={{ maxWidth: '60%' }}>
        <button type='button' className='btn btn-secondary mb-5' onClick={(e) => props.setInitialState(e)}><ion-icon name="ios-arrow-back"></ion-icon>Your Imports</button>

        <h2 className="mb-2">Files Uploaded:</h2>
        {(previousFilesUploaded.length > 10) ? 
          <p>{prevFiles.slice(0, 10).join(", ")} <strong> and {prevFiles.length - 10} more</strong></p>
        : <p>{prevFiles.join(", ")}</p>}

        <div className='row mt-5 mb-2'>
          <div className='col text-left'>
            <h2>Import Summary</h2>
          </div>
        </div> 

        <table className="table mb-5">
          <tbody>
            {formData.map((field, index) => {
              let label = field[0];
              return(
                <tr key={index}>
                  <th>{schemaProperties[label]}</th>
                  <td>{field[1]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }else{return null}
}

export default ViewImportPage;