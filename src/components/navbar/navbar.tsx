import React from "react";

import styles from "/navbar.module.css";

export interface navbarProps {
  prop?: string;
}

export function navbar({ prop = "default value" }: navbarProps) {
  return <div className={styles.navbar}>logo carrito {prop}</div>;
}
