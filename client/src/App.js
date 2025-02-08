import './App.css';
import axios from "axios";
import React from 'react';
import {useEffect, useState} from "react"; //biar tiap di jalanin pagenya langsung ke ambil smw get requestnya

function App() {

  const [listOfPosts, setListOfPosts] = useState([]);//list containing all the posts that we receieve from the api req

  useEffect(()=>{
    axios.get("http://localhost:1515/posts").then((response)=>{
      setListOfPosts(response.data); // contains the api request
    }); //axios get biar ditampilin smw, get our api yang dibikin sebelumnya
  }, []);
  return (<div className="App">
      {listOfPosts.map((value,key)=>{ //key = index ke berapa
        return (
          <div className='post'>
            <div className='title'>{value.title}</div>
            <div className='body'>{value.postText}</div>
            <div className='footer'>{value.username}</div>
        </div>
      );
    })}
  </div>
  );
}

export default App;
