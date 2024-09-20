'use client';

import dynamic from 'next/dynamic';
import styles from './BannerPage.module.css';

const DynamicBanner = dynamic(() => import('../components/Banner'), {
  ssr: false,
});

export default function BannerPage() {
  return (
    <div className={styles.container}>
      <DynamicBanner tileSource="/img/banner_dzi.dzi" />
    </div>
  );
}