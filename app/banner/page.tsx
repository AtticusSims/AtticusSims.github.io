'use client';

import dynamic from 'next/dynamic';

const DynamicBanner = dynamic(() => import('../components/Banner'), {
  ssr: false,
});

export default function BannerPage() {
  return <DynamicBanner tileSource="/img/banner_dzi.dzi" />;
}