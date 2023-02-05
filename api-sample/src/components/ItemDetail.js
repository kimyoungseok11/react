import React from "react";
import ItemImg from "./ItemImg";

const ItemDetail = ({ info, category }) => {
  console.log(info, category);

  if (
    (category === "equipment") |
    (category === "avatar") |
    (category === "creature")
  ) {
    return (
      <div>
        {info.itemName}
        <ItemImg id={info.itemId} />
      </div>
    );
  } else if (category === "flag") {
    return (
      <div>
        {info.itemName}
        <ItemImg id={info.itemId} />
      </div>
    );
  }
  return (
    <div>
      {info.talisman.itemName}
      <ItemImg id={info.talisman.itemId} />
    </div>
  );
};

export default ItemDetail;
