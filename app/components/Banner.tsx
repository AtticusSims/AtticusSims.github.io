'use client';

import React, { useEffect, useRef } from 'react';
import OpenSeadragon from 'openseadragon';
import styles from './Banner.module.css';

interface OverlayData {
  x: number;
  y: number;
  width: number;
  height: number;
  url: string;
}

interface BannerProps {
  tileSource: string;
  overlays: OverlayData[];
}

const Banner: React.FC<BannerProps> = ({ tileSource, overlays }) => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    const viewer = OpenSeadragon({
      element: viewerRef.current,
      tileSources: tileSource,
      showNavigationControl: false,
      defaultZoomLevel: 1,
      minZoomLevel: 1,
      maxZoomLevel: 10,
      visibilityRatio: 1,
      constrainDuringPan: true,
      immediateRender: true,
      homeFillsViewer: true,
    });

    viewer.addHandler('open', function() {
      const image = viewer.world.getItemAt(0);
      const imageWidth = (image.source as any)?.width ?? image.getContentSize().x;
      const imageHeight = (image.source as any)?.height ?? image.getContentSize().y;
      
      overlays.forEach((overlay) => {
        const element = document.createElement('div');
        element.style.position = 'absolute';
        element.style.cursor = 'pointer';

        // Convert image coordinates to viewport coordinates
        const topLeft = viewer.viewport.imageToViewportCoordinates(
          overlay.x * imageWidth,
          overlay.y * imageHeight
        );
        const bottomRight = viewer.viewport.imageToViewportCoordinates(
          (overlay.x + overlay.width) * imageWidth,
          (overlay.y + overlay.height) * imageHeight
        );

        const viewportRect = new OpenSeadragon.Rect(
          topLeft.x,
          topLeft.y,
          bottomRight.x - topLeft.x,
          bottomRight.y - topLeft.y
        );

        viewer.addOverlay({
          element: element,
          location: viewportRect,
        });

        // Use MouseTracker to handle clicks on the overlay
        new OpenSeadragon.MouseTracker({
          element: element,
          clickHandler: function() {
            window.open(overlay.url, '_blank');
            return false; // Prevent default behavior
          }
        });
      });
    });

    return () => {
      viewer.destroy();
    };
  }, [tileSource, overlays]);

  return (
    <div className={styles.bannerContainer}>
      <div ref={viewerRef} className={styles.viewer}></div>
    </div>
  );
};

export default Banner;