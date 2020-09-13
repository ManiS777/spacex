import React, { useEffect, useState } from 'react';
import Home from './Home';
import axios from 'axios';
import queryString from 'query-string'

export default (props) => {
  const [data, setData] = useState([]);
  const [sidebarData, setSidebarData] = useState([]);
  let params = queryString.parse(props.location.search);
  console.log("in app.js file",params);
  useEffect(() => {
    params.limit = 100;
    axios.get(`https://api.spacexdata.com/v3/launches?${queryString.stringify(params)}`)
      .then(res => {
        setData(res.data)
      })
  }, [params.launch_success, params.land_success, params.launch_year]);
  useEffect(() => {

    axios.get(`https://api.spacexdata.com/v3/launches?limit=100`)
      .then(res => {
        let a = [];
        res.data
          .forEach((i) => {
            if (!a.includes(i.launch_year))
              a.push(i.launch_year);
          })
          setSidebarData(a)
      })
  }, []);
  return <Home data={data} sidebarData={sidebarData} name="Kumar Mani Shankar" />;
};