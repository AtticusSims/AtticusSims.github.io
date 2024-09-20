'use client';

import React, { useEffect, useRef } from 'react';
import OpenSeadragon from 'openseadragon';
import styles from './Banner.module.css';

interface BannerProps {
  tileSource: string;
}

const Banner: React.FC<BannerProps> = ({ tileSource }) => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    const viewer = OpenSeadragon({
      element: viewerRef.current,
      tileSources: tileSource,
      showNavigationControl: false,
      defaultZoomLevel: 0,
      minZoomLevel: 0,
      maxZoomLevel: 10,
      visibilityRatio: 1,
      constrainDuringPan: true,
      immediateRender: true,
    });

    return () => {
      viewer.destroy();
    };
  }, [tileSource]);

  return (
    <div className={styles.bannerContainer}>
      <div ref={viewerRef} className={styles.viewer}></div>
    </div>
  );
};

export default Banner;