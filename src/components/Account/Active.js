import React from "react";
import { AccountProduct } from "./AccountProduct";
import { useSelector } from "react-redux";

export const Active = () => {
  const { items } = useSelector(({ account }) => account);
  const [products, setProducts] = React.useState([
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
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <div className="account_active">
      {products.map((item) => {
        return (
          <AccountProduct
            key={item.id}
            {...item}
            deleteProduct={deleteProduct}
          />
        );
      })}
      <div className="account__electeds">
        {items.map((item) => {
          return <AccountProduct key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};
