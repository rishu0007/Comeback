import React from "react";

const ProfileCard = () => {
  const styles = {
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "10px",
    color: "black",
  };

  return (
    <div style={styles}>
      <h1>This is title 2</h1>
      <p>
        This is description 2 Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Libero culpa perspiciatis iure saepe praesentium quam
        totam veniam tempora quo velit! Perferendis soluta asperiores suscipit
        quibusdam consectetur distinctio ipsum eaque reiciendis?
      </p>
    </div>
  );
};

export default ProfileCard;
