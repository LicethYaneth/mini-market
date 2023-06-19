import styles from "@/styles/product.module.css";

export default function ProductPage() {
  return (
    <div className={styles.products}>
      <h2>Product</h2>
      <hr />

      <div className={styles.descripcion}>
        Please choose a product on the left
      </div>
    </div>
  );
}
