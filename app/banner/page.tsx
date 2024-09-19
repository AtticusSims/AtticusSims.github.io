'use client';

import { useEffect, useRef } from 'react';
import OpenSeadragon from 'openseadragon';
import styles from './banner.module.css';

export default function BannerPage() {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    const viewer = OpenSeadragon({
      element: viewerRef.current,
      tileSources: '/img/banner_dzi.dzi',  // Updated to use DZI
      prefixUrl: '/openseadragon/images/',
      minZoomImageRatio: 0.5,
      maxZoomPixelRatio: 2,
      immediateRender: true,
      visibilityRatio: 1,
      constrainDuringPan: true,
      showNavigationControl: false,
      gestureSettingsTouch: {
        pinchRotate: false,
        zoomToRefPoint: true,
      } as any,
    });

    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div ref={viewerRef} className={styles.viewer}></div>
    </div>
  );
}