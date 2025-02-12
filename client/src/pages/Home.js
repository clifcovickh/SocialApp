import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);//bikin state that basically stores the data we receive in a array []
  let history = useHistory();

  useEffect(() => {//function gets called everytime page renders
    axios.get("http://localhost:3001/posts").then((response) => {// a promise == "after doing something do this" and store it in 'response'
      setListOfPosts(response.data);// Ditampilin data tadi yang udah diambil pake setlistosposts state
    });
  }, []);

  return (
    <div>
      {listOfPosts.map((value, key) => {// elements, array
        return (
          <div
            key={key}
            className="post"
            onClick={() => {
              history.push(`/post/${value.id}`);
            }}
          >
            <div className="title"> {value.title} </div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;

//mapping terus di return div, tiap div ngambil bagian dari data.
