import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  // useEffect to fetch data whenever resourceType changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(data => setItems(data));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>User</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre key={item.id}>{JSON.stringify(item, null, 2)}</pre>;
      })}
    </>
  );
}

export default App;
