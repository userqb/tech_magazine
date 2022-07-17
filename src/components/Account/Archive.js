import React from "react";
import { AccountProduct } from "./AccountProduct";

export const Archive = () => {
  const [archiveItems, setArchiveItems] = React.useState([
    {
      id: 0,
      image:
        "https://ae01.alicdn.com/kf/HTB1TTJpRpXXXXbcapXXq6xXFXXXo/Processador-amd-ryzen-r7-1700-cpu-original-8core-16threads-am4-3-0ghz-tdp-65w-14nm-ddr4.jpg",
      name: "Название заказанного товара",
      description:
        "Описание продукта — это маркетинговый текст, который объясняет, что это за продукт и почему его стоит приобрести",

      price: 345,
    },
  ]);
  return (
    <div>
      {archiveItems.map((item) => {
        return (
          <AccountProduct
            key={item.id}
            {...item}
            valueBtn={"Перенести в архив"}
          />
        );
      })}
    </div>
  );
};
