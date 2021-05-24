import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';

function DataFetch() {
    const [post, setPost] = useState<any>({})
    const [id, setId] = useState<any | null>("")
    const [idRequest, setIdRequest] = useState<any>("")

    const handleClick = () => {
        setIdRequest(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idRequest}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idRequest])
    return (
        <div>
            <input placeholder="Skriv ID 1-100" type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Hämta inlägg</button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetch
