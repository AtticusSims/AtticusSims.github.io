'use client';

import dynamic from 'next/dynamic';
import styles from './BannerPage.module.css';
import overlayData from '../../banner_coords.json';

const DynamicBanner = dynamic(() => import('../components/Banner'), {
  ssr: false,
});

const overlays = overlayData.map(overlay => ({
  ...overlay,
  url: 'https://www.wikipedia.org/'
}));

export default function BannerPage() {
  return (
    <div className={styles.container}>
      <DynamicBanner tileSource="/img/banner_dzi.dzi" overlays={overlays} />
    </div>
  );
}