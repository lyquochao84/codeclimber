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

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Navigation() {
  const { openModal } = useModal();
  const { theme, setTheme } = useContext(ThemeContext);

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
        {theme === "light" ? (
          <FaLandMineOn className={styles.icon_light} onClick={toggleTheme} />
        ) : (
          <CiLight className={styles.icon_dark} onClick={toggleTheme} />
        )}
        <span>/</span>
        {theme === "light" ? (
          <CiLight className={styles.icon_light} onClick={toggleTheme} />
        ) : (
          <FaLandMineOn className={styles.icon_dark} onClick={toggleTheme} />
        )}
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
