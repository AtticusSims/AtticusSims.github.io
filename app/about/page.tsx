"use client";

import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.credits}>
          <div className={styles.creditRow}>
            <div className={styles.role}>Artistic Director</div>
            <div className={styles.name}>Michael Whittle</div>
          </div>
          <div className={styles.creditRow}>
            <div className={styles.role}>Research Assistant</div>
            <div className={styles.name}>Tony Cheung</div>
          </div>
          <div className={styles.creditRow}>
            <div className={styles.role}>Technical Design Lead</div>
            <div className={styles.name}>Studio Pollen, Atticus Sims</div>
          </div>
          <div className={styles.creditRow}>
            <div className={styles.role}>Booklet Design</div>
            <div className={styles.name}>Studio MARY</div>
          </div>
        </div>

        <div className={styles.acknowledgment}>
          <p>
            Thanks also to HKBU University Librarian for his unwavering support
            of this project, and to Lolita Kwok – for her professional advice as
            Head of Resource Discovery at HKBU Library
          </p>
        </div>

        <div className={styles.links}>
          <a
            href="https://library.hkbu.edu.hk"
            target="_blank"
            rel="noopener noreferrer"
          >
            library.hkbu.edu.hk
          </a>
          <a
            href="https://studio-pollen.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            studio-pollen.com
          </a>
        </div>

        <div className={styles.logos}>
          <Image
            src="/library-logo.svg"
            alt="HKBU Library Logo"
            width={200}
            height={93}
            priority
            className={styles.logo}
          />
          <Image
            src="/pollen-logo.png"
            alt="Studio Pollen Logo"
            width={400}
            height={400}
            priority
            className={`${styles.logo} ${styles.pollenLogo}`}
          />
        </div>
        <div className={styles.copyright}>© 2025 Studio Pollen</div>
      </div>
    </div>
  );
}
