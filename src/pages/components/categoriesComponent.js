import React from "react";

const items = [1, 2, 3, 4];

export const categoriesComponent = () => {
  return (
    <div>
      {items.map((item) => {
        <div>{item}</div>;
      })}
    </div>
  );
};
