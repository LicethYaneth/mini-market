"use client";

import styles from "@/styles/page.module.css";
import localFont from "next/font/local";
import { Navbar } from "@/components";
import StorePage from "./store/page";
import ProductPage from "./product/page";
import { Provider } from "react-redux";
import store from "@/redux/store";
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
    <Provider store={store}>
      <main className={styles.main}>
        <div className={core.className}>MINI MARKET · CART </div>
        <div className={styles.card}>
          <Navbar />
          <div className={styles.container}>
            <StorePage />
            <ProductPage />
          </div>
        </div>
      </main>
    </Provider>
  );
}
