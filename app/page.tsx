import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/banner">
        <button className={styles.button}>VIEW BANNER</button>
      </Link>
    </main>
  );
}