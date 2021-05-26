import React, { useState } from 'react';
import '../styles/post.css';


const DataFetch = ({showFetch}: any) => {
    const [title, setTitle] = useState<any>("");
    const [body, setBody] = useState<any>("");
  
    const onTitleChange = (e: { target: { value: any; }; }) => setTitle(e.target.value);
    const onBodyChange = (e: { target: { value: any; }; }) => setBody(e.target.value);
    
    const handlePost = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const data = { title, body };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };

        fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
    };
    return (
        <div className="post-holder">
            <form>
                <div className="post-fields">
                    <input className="input-field fields" placeholder="Titel" value={title} onChange={onTitleChange} required />
                    <textarea className="fields post-text" placeholder="Text" value={body} onChange={onBodyChange} required />            
                    <button className="post-button fields" type="submit" onClick={handlePost}>Skapa inlägg</button>
                </div>
            </form>
            <button className="post-button fields show-button" onClick={showFetch}>Visa hämta inlägg</button>
        </div>
    )
}

export default DataFetch
