import React, { useEffect, useState } from 'react'


function Name() {
    console.log('Component rendering....')
    const [name,setName] = useState({})
    useEffect(()=>{

    })
    const fetchName = () => {
      fetch("./data.json")
      .then(res=>res.json())
      // .then( jsonData => setName(jsonData.name))
      .then( jsonData => setName(jsonData))
    };
    console.log('fetcing data....');
    fetchName();
  return (
    // <p>Namde : {name}</p>
    'hello'
  )
}

export default Name