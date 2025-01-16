import Image from "next/image";
import styles from "./page.module.css";

export default function LandingPage() {
  return (
    <main className={styles.container}>
      <div className={styles.backgroundWrapper}>
        <Image
          src="/landing_BG.svg"
          alt="Decorative circle pattern background"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.textContainer}>
          <Image
            src="/landing_TEXT.svg"
            alt="Hong Kong Baptist University Library - The Tree of Knowledge"
            width={1200}
            height={100}
            style={{
              width: "80%",
              height: "auto",
              maxWidth: "1200px",
            }}
          />
        </div>
      </div>
    </main>
  );
}
