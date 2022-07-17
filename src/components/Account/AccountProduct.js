import React from "react";
import { MyButton } from "../../UI/MyButton";

export const AccountProduct = ({
  id,
  image,
  name,
  price,
  description,
  deleteProduct,
  valueBtn,
}) => {
  const deleteOn = () => {
    if (window.confirm("Вы действительно хотите удалить товар?"))
      deleteProduct(id);
  };

  return (
    <div className="basket-product">
      <img className="product__img" src={image} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <h3>{price}руб</h3>
      <MyButton>{valueBtn}</MyButton>
      <MyButton onClick={deleteOn} className="btn_red">
        Удалить
      </MyButton>
    </div>
  );
};
