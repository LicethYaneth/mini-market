"use client";
import styles from "@/styles/product.module.css";
import React, { useState } from "react";

export default function ProductPage() {
  const [selected, setSelected] = useState(false);

  return (
    <div className={styles.products}>
      <h2>Product</h2>
      <hr />
      {selected ? (
        <div className={styles.descripcion}>
          Please choose a product on the left
          <button onClick={() => setSelected(false)}>Cart</button>
        </div>
      ) : (
        <div className={styles.descripcion}>Detail product</div>
      )}
    </div>
  );
}
