import React from "react";
import Logo from "@/assets/svg/logo.svg";
import Image from "next/image";
import styles from "./navbar.module.css";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <button className={styles.button}>
        <Image src={Logo} alt="Mini Market logo" width={80}></Image>
      </button>
    </div>
  );
}
