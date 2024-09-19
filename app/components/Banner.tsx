'use client';

import { useEffect, useRef } from 'react';
import type OpenSeadragon from 'openseadragon';

// Remove the dynamic import for OpenSeadragon
// const OpenSeadragon = dynamic(() => import('openseadragon'), {
//   ssr: false,
// });

interface BannerProps {
  tileSource: string;
}

export default function Banner({ tileSource }: BannerProps) {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let viewer: OpenSeadragon.Viewer | null = null;

    if (typeof window !== 'undefined' && viewerRef.current) {
      import('openseadragon').then((OpenSeadragon) => {
        try {
          const element = viewerRef.current;
          if (!element) return;

          viewer = OpenSeadragon.default({
            element,
            prefixUrl: "/openseadragon/images/",
            tileSources: tileSource,
            animationTime: 0.5,
            blendTime: 0.1,
            constrainDuringPan: true,
            maxZoomPixelRatio: 2,
            minZoomLevel: 1,
            visibilityRatio: 1,
            zoomPerScroll: 2,
          });
        } catch (error) {
          console.error('Error initializing OpenSeadragon:', error);
        }
      });
    }

    return () => {
      if (viewer) {
        viewer.destroy();
      }
    };
  }, [tileSource]);

  return <div ref={viewerRef} style={{ width: '100%', height: '100vh' }} />;
}