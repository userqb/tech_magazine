import React from "react";
import { MyButton } from "../../UI/MyButton";
import { Product } from "../Product";
import { AccountProduct } from "./AccountProduct";

export const Account = () => {
  const [items, setItems] = React.useState([
    {
      id: 0,
      image:
        "https://ae01.alicdn.com/kf/HTB1TTJpRpXXXXbcapXXq6xXFXXXo/Processador-amd-ryzen-r7-1700-cpu-original-8core-16threads-am4-3-0ghz-tdp-65w-14nm-ddr4.jpg",
      name: "Название заказанного товара",
      description:
        "Описание продукта — это маркетинговый текст, который объясняет, что это за продукт и почему его стоит приобрести",

      price: 345,
    },
    {
      id: 1,
      image:
        "https://ae01.alicdn.com/kf/HTB1TTJpRpXXXXbcapXXq6xXFXXXo/Processador-amd-ryzen-r7-1700-cpu-original-8core-16threads-am4-3-0ghz-tdp-65w-14nm-ddr4.jpg",
      name: "Название заказанного товара",
      description:
        "Описание продукта — это маркетинговый текст, который объясняет, что это за продукт и почему его стоит приобрести",

      price: 343,
    },
    {
      id: 2,
      image:
        "https://ae01.alicdn.com/kf/HTB1TTJpRpXXXXbcapXXq6xXFXXXo/Processador-amd-ryzen-r7-1700-cpu-original-8core-16threads-am4-3-0ghz-tdp-65w-14nm-ddr4.jpg",
      name: "Название заказанного товара",
      description:
        "Описание продукта — это маркетинговый текст, который объясняет, что это за продукт и почему его стоит приобрести",
      price: 342,
    },
    {
      id: 3,
      image:
        "https://ae01.alicdn.com/kf/HTB1TTJpRpXXXXbcapXXq6xXFXXXo/Processador-amd-ryzen-r7-1700-cpu-original-8core-16threads-am4-3-0ghz-tdp-65w-14nm-ddr4.jpg",
      name: "Название заказанного товара",
      description:
        "Описание продукта — это маркетинговый текст, который объясняет, что это за продукт и почему его стоит приобрести",

      price: 341,
    },
  ]);

  const deleteProduct = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const clearProducts = () => {
    if (window.confirm("Вы действительно хотите очистить историю заказов?"))
      setItems([]);
  };

  return (
    <div className="account">
      <div className="container">
        <h2>История заказов:</h2>
        <div className="account-inner">
          <div className="container__products">
            {items.map((item) => {
              return (
                <AccountProduct
                  key={item.id}
                  {...item}
                  deleteProduct={deleteProduct}
                />
              );
            })}
          </div>
          <div className="account__btn">
            <MyButton onClick={clearProducts} className="btn_red">
              Очистить историю заказов
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};
