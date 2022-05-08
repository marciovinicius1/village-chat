import React from "react";

import CardKing from "./CardsWithSwiper/CardKing";
import CardKnight from "./CardsWithSwiper/CardKnight";
import CardZombie from "./CardsWithSwiper/CardZombie";

import Atropos from "atropos/react";

const Cards: React.FC = () => {
  return (
    <div className="hidden md:flex mt-5 mb-8 gap-8">
      <Atropos shadow={false}>
        <CardKnight />
      </Atropos>

      <Atropos shadow={false}>
        <CardKing />
      </Atropos>

      <Atropos shadow={false}>
        <CardZombie />
      </Atropos>
    </div>
  );
};

export default Cards;
