'use client';

import dynamic from 'next/dynamic';
import styles from './BannerPage.module.css';

const DynamicBanner = dynamic(() => import('../components/Banner'), {
  ssr: false,
});

const overlays = [
  {
    x: 0.17664020013945056,
    y: 0.0682557550443146,
    width: 0.06908831908831908,
    height: 0.014390691977954685,
    url: 'https://www.google.com/'
  }
];

export default function BannerPage() {
  return (
    <div className={styles.container}>
      <DynamicBanner tileSource="/img/banner_dzi.dzi" overlays={overlays} />
    </div>
  );
}