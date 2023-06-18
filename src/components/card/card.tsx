import React from "react";
import { Navbar } from "@/components/navbar";
import styles from "./card.module.css";

export function Card() {
  return (
    <div className={styles.card}>
      <Navbar></Navbar>
    </div>
  );
}
