import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        const getResponse = async() => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            if(data && data.length)
                setData(data);
            console.log(data[0])
        };
        getResponse();
    }, [])

  return (
    <div>
        <h1>Title: {data[0]?.title}</h1>
    </div>
  )
}

export default FetchDataEffect