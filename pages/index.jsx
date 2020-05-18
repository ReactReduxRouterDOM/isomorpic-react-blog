import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";

const Home = (props) => {
  const [msg, setMsg] = useState("World");
  //   const [serverMsg, setServerMsg] = useState("");
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setMsg(e.target.value);
    setInput(e.target.value);
  };

  return (
    <>
      <h1>
        {props.message} {msg}
      </h1>
      <input
        type="text"
        value={input}
        onChange={(v) => setInput(v.target.value)}
        placeholder="Place your message here"
        onChange={handleChange}
      />
    </>
  );
};

Home.getInitialProps = async () => {
  const fetched = await fetch("http://localhost:5000/");
  const data = await fetched.json();
  return data;
};

export default Home;
