import React from "react";
import { AccountProduct } from "./AccountProduct";

export const Active = () => {
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

  return (
    <div className="account_active">
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
  );
};
