"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className={styles.container}>
      <div className={styles.backgroundWrapper}>
        <Image
          src="/landing_BG_103.webp"
          alt="Decorative circle pattern background"
          fill
          sizes="100vw"
          priority
          quality={100}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.contentGroup}>
        <div className={styles.textWrapper}>
          <Image
            src="/landing-TEXT_v3.svg"
            alt="Hong Kong Baptist University Library - The Tree of Knowledge"
            width={1200}
            height={100}
            priority
            style={{
              height: "auto",
              width: "100%",
              maxWidth: "1200px",
            }}
          />
        </div>
        <div className={styles.buttonGroup}>
          <Link href="/banner" className={styles.button}>
            Banner Viewer
          </Link>
          <Link href="/essay" className={styles.button}>
            Essay
          </Link>
          <Link href="/about" className={styles.button}>
            About
          </Link>
        </div>
      </div>
    </main>
  );
}
