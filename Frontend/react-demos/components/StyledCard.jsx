import React from "react";

const StyledCard = () => {
  const styles = {
    backgroundColor: "lightblue",
    padding: "15px",
    borderRadius: "10px",
    color: "darkblue",
  };

  return (
    <div style={styles}>
      <h1>This is a title 1</h1>
      <p>
        This is description Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Harum cum neque at necessitatibus vero repudiandae officia non
        dolorum ipsa commodi facilis iusto cumque aut eaque molestias et, quod
        libero incidunt.
      </p>
    </div>
  );
};

export default StyledCard;
