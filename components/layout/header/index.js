import React, { useState, useRef, useEffect } from "react";
import { StyledContentContainer } from "../sections/contentContainer";
import Burger from "../navigation/burger";
import Menu from "../navigation/menu";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const [hideLogo, setHideLogo] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHideLogo(window.scrollY > 200);
    });
  }, []);

  return (
    <header ref={node} className={styles.header}>
      <StyledContentContainer>
        <Link href={"/"}>
          <a className={styles.logoLink}>
            <Image
              // insert logo here
              src="/img/frc_logo.png"
              alt="Logo"
              width={197}
              height={197}
              layout="responsive"
            />
          </a>
        </Link>
      </StyledContentContainer>

      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
