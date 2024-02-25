import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/image/logo.jpg";

import styles from "./navigation.module.css";
import SearchBar from "./Search/page";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo_link} href="/">
        <Image
          className={styles.logo_image}
          src={logo}
          alt="Code Climber"
          width={110}
          height={110}
        />
      </Link>
      <SearchBar />
      <button className={styles.create_button}>Add</button>
    </header>
  );
}
