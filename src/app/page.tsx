import styles from "@/styles/page.module.css";
import localFont from "next/font/local";
import { Navbar } from "@/components";
import StorePage from "./store/page";
import ProductPage from "./product/page";

const core = localFont({
  src: [
    {
      path: "../assets/fonts/Core Sans E/CoreSansE-65Bold.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Core Sans E/CoreSansE-65Bold.otf",
      weight: "600",
      style: "bold",
    },
  ],
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={core.className}>MINI MARKET · CART </div>
      <div className={styles.card}>
        <Navbar />
        <div>
          <StorePage />
          <ProductPage />
        </div>
      </div>
    </main>
  );
}
