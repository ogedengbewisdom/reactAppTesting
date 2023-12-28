
import React, { useEffect, useState } from 'react'

const Async = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const resData = await res.json()
            setData(resData)
        };
        fetchData() 
    }, [])
  return (
    <ul>
        {data && data.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>
  )
}

export default Async