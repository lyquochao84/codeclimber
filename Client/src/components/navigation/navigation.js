"use client";
import { useModal } from "@/context/ModalContext";

import Link from "next/link";
import Image from "next/image";

import logo from "../../assets/image/logo.jpg";
import user_avatar from "../../assets/image/avatar.png";

import styles from "./navigation.module.css";
import { FaLandMineOn } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";

import SearchBar from "./Search/page";

export default function Navigation() {
  const { openModal } = useModal();

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
      <button className={styles.create_button} onClick={openModal}>
        Add
      </button>
      <div className={styles.icons_wrapper}>
        <FaLandMineOn className={styles.icon_neon} />
        <span>/</span>
        <CiLight className={styles.icon_light} />
      </div>
      <Image
        className={styles.user_avatar}
        src={user_avatar}
        width={100}
        height={10}
      />
    </header>
  );
}
