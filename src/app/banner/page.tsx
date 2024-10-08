'use client';

import React, { useEffect, useRef } from 'react';
import styles from './banner.module.css';
import OpenSeadragon from 'openseadragon';

export default function BannerPage() {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    let viewer: OpenSeadragon.Viewer | null = null;

    const initializeViewer = async () => {
      const OpenSeadragonModule = await import('openseadragon');
      const OpenSeadragonInstance = OpenSeadragonModule.default;
      
      viewer = OpenSeadragonInstance({
        element: viewerRef.current!,
        tileSources: '/img/banner_dzi.dzi',
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
        } as OpenSeadragon.GestureSettings,
      });

      viewer.addHandler("open-failed", (event: OpenSeadragon.OpenFailedEvent) => {
        console.error("Failed to open tile source:", event);
      });

      viewer.addHandler("tile-load-failed", (event: OpenSeadragon.TileLoadFailedEvent) => {
        console.error("Failed to load tile:", event);
      });
    };

    initializeViewer();

    return () => {
      if (viewer && typeof viewer.destroy === 'function') {
        viewer.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div ref={viewerRef} className={styles.viewer}></div>
    </div>
  );
}