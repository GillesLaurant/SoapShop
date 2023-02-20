import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/products";
import SoapCard from "../components/SoapCard";

/*****      VIEW SEARCH PRODUCTS     *****/
export default function SearchProducts() {
  const { categories }: any = useParams();

  const array = () => {
    return products.filter((cat) => cat.categorie.includes(categories));
  };

  return (
    <div className="container row justify-content-evenly">
      {array().map((soap: any, id: number) => (
        <SoapCard
          key={id}
          title={soap.title}
          quantGr={soap.quantGr}
          textDescription={soap.textDescription}
          arrayCompo={soap.arrayCompo}
          price={soap.price}
          img={soap.img}
        />
      ))}
    </div>
  );
}
