import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({ children }) => {
  const [szakdogak, setSzakdogak] = useState([]);
 

  function getdata(endPoint, setter) {
    myAxios
      .get(endPoint)
      .then(function (response) {
        console.log(response.data);
        setter(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally();
  }

  function postdata(endpoint, data) {
    myAxios
      .post(endpoint, data)
      .then(function (response) {
        console.log(response);
        console.log("siiker post")
        getdata("/szakdogas",setSzakdogak );
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }

  function putdata(endpoint, data) {
    myAxios
      .put(endpoint, data)
      .then(function (response) {
        console.log(response);
        console.log("siiker")
        getdata("/szakdogas", setSzakdogak);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }

  function deleteData(endpoint,data){
    {
      myAxios
        .delete(endpoint, data)
        .then(function (response) {
          console.log(response);
          console.log("törölve")
          getdata("/szakdogas", setSzakdogak);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {});
    }

  }

  useEffect(() => {
    getdata('/szakdogas', setSzakdogak);
   
  }, []);





  return (
    <ApiContext.Provider value={{szakdogak, deleteData, setSzakdogak,  postdata}}>
      {children}
    </ApiContext.Provider>
  );
};
