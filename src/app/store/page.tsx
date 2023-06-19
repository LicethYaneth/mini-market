"use client";
import styles from "@/styles/store.module.css";
import Image from "next/image";
import { products } from "@/data/products";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { addProduct } from "@/redux/states/product";
import store from "@/redux/store";

export default function StorePage() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(addProduct(products));
  // }, []);
  return (
    <div className={styles.store}>
      <h2>Store</h2>
      <hr />
      <div className={styles.containerstore}>
        {products.map((prod: any) => {
          return (
            <div
              key={prod.name}
              style={{ position: "relative" }}
              onClick={() => {}}
            >
              <div className={styles.tag}>{prod.amount_available}</div>
              <Image width="190" src={prod.photo} alt={prod.name}></Image>
            </div>
          );
        })}
      </div>
    </div>
  );
}
