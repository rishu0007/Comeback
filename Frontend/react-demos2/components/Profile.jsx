import React, { useState } from "react";

const Profile = () => {
  const [info, setInfo] = useState({
    name: "Rishu",
    age: 22,
  });

  const [name, setName] = useState("");
  const [age, setAge] = useState();

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateAge = (e) => {
    setAge(e.target.value);
  };

  const update = () => {
    setInfo({ ...info, name, age });
    setAge();
    setName("");
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <ul>
        <li key={Math.random()}>Name: {info.name}</li>
        <li key={Math.random()}>Age: {info.age}</li>
      </ul>
      <input type="text" placeholder="Updated Name" onChange={updateName} />
      <input type="text" placeholder="Update Age" onChange={updateAge} />
      <button onClick={update}>Update</button>
    </div>
  );
};

export default Profile;
