import React from "react";
import { MyButton } from "../../UI/MyButton";
import { Product } from "../Product";

const items = [
  {
    id: 0,
    image:
      "https://ae01.alicdn.com/kf/HTB1TTJpRpXXXXbcapXXq6xXFXXXo/Processador-amd-ryzen-r7-1700-cpu-original-8core-16threads-am4-3-0ghz-tdp-65w-14nm-ddr4.jpg",
    name: "tovar",
    price: 345,
  },
  {
    id: 1,
    image:
      "https://ae01.alicdn.com/kf/HTB1TTJpRpXXXXbcapXXq6xXFXXXo/Processador-amd-ryzen-r7-1700-cpu-original-8core-16threads-am4-3-0ghz-tdp-65w-14nm-ddr4.jpg",
    name: "tovar2",
    price: 345,
  },
  {
    id: 2,
    image:
      "https://ae01.alicdn.com/kf/HTB1TTJpRpXXXXbcapXXq6xXFXXXo/Processador-amd-ryzen-r7-1700-cpu-original-8core-16threads-am4-3-0ghz-tdp-65w-14nm-ddr4.jpg",
    name: "tovar3",
    price: 345,
  },
  {
    id: 3,
    image:
      "https://ae01.alicdn.com/kf/HTB1TTJpRpXXXXbcapXXq6xXFXXXo/Processador-amd-ryzen-r7-1700-cpu-original-8core-16threads-am4-3-0ghz-tdp-65w-14nm-ddr4.jpg",
    name: "tovar4",
    price: 345,
  },
];

export const Account = () => {
  return (
    <div className="account">
      <div className="container">
        <div className="account-inner">
          <h2>Заказанные товары:</h2>
          <div className="container__products">
            {items.map((item) => {
              return (
                <Product
                  className="product"
                  key={item.id}
                  {...item}
                  valueBtn="Удалить"
                />
              );
            })}
          </div>
          <div className="account__btn">
            <MyButton className="btn_red">Очистить историю заказов</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};
