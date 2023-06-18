import React from "react";
import styles from "./Cart.module.css";
import { GiShoppingCart } from "react-icons/gi";

export interface CartProps {
  prop?: string;
}

export function Cart() {
  return (
    <div className={styles.Cart}>
      <GiShoppingCart fontSize="xx-large" />
      <div>$0</div>
    </div>
  );
}
