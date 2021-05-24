import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../styles/fetch.css';

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
        <div className="holder">
            <div className="post">
                <div className="get-post">
                    <input className="input-field" placeholder="Skriv ID 1-100" type="text" value={id} onChange={e => setId(e.target.value)} />
                    <a className="search-button" type="button" onClick={handleClick}>Hämta inlägg</a>
                </div>
                <div className="post-request">{post.title}</div>
            </div>
        </div>
    )
}

export default DataFetch
