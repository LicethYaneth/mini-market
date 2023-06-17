import Image from "next/image";
import styles from "@/styles/page.module.css";
import localFont from "next/font/local";

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
    </main>
  );
}
