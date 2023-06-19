import styles from "@/styles/store.module.css";
import Image from "next/image";
import Alqueria from "../../../public/images/Alqueria.png";
import Zucaritas from "../../../public/images/Zucaritas.png";
import Milo from "../../../public/images/Milo.png";
import Detodito from "../../../public/images/Detodito.png";

export default function StorePage() {
  return (
    <div className={styles.store}>
      <h2>Store</h2>
      <hr />
      <div className={styles.containerstore}>
        <div>
          <Image width="190" src={Alqueria} alt="Alqueria"></Image>
        </div>
        <div>
          <Image width="190" src={Zucaritas} alt="Zucaritas"></Image>
        </div>
        <div>
          <Image width="190" src={Milo} alt="Milo"></Image>
        </div>
        <div>
          <Image width="190" src={Detodito} alt="Detodito"></Image>
        </div>
        <div>
          <Image width="190" src={Detodito} alt="Detodito"></Image>
        </div>
        <div>
          <Image width="190" src={Alqueria} alt="Alqueria"></Image>
        </div>
        <div>
          <Image width="190" src={Milo} alt="Milo"></Image>
        </div>
        <div>
          <Image width="190" src={Alqueria} alt="Alqueria"></Image>
        </div>
        <div>
          <Image width="190" src={Milo} alt="Milo"></Image>
        </div>
        <div>
          <Image width="190" src={Detodito} alt="Detodito"></Image>
        </div>
        <div>
          <Image width="190" src={Zucaritas} alt="Zucaritas"></Image>
        </div>
        <div>
          <Image width="190" src={Alqueria} alt="Alqueria"></Image>
        </div>
      </div>
    </div>
  );
}
