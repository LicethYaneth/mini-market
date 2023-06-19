import styles from "@/styles/store.module.css";
import Image from "next/image";
import { products } from "@/data/products";

export default function StorePage() {
  return (
    <div className={styles.store}>
      <h2>Store</h2>
      <hr />
      <div className={styles.containerstore}>
        {products.map((product: any) => {
          return (
            <div key={product.name} style={{ position: "relative" }}>
              <div className={styles.tag}>{product.amount_available}</div>
              <Image width="190" src={product.photo} alt={product.name}></Image>
            </div>
          );
        })}
      </div>
    </div>
  );
}
