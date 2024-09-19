'use client';

import React, { useEffect, useRef } from "react";
import OpenSeadragon from 'openseadragon';

export default function Banner() {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    let viewer: OpenSeadragon.Viewer | null = null;

    const initializeViewer = async () => {
      const OpenSeadragonModule = await import('openseadragon');
      const OpenSeadragonInstance = OpenSeadragonModule.default;
      
      const tileSource = "/img/banner_dzi.dzi";
      console.log("Attempting to load tile source:", tileSource);

      try {
        viewer = OpenSeadragonInstance({
          element: viewerRef.current!,
          prefixUrl: "/openseadragon/images/",
          tileSources: tileSource,
          animationTime: 0.5,
          blendTime: 0.1,
          constrainDuringPan: true,
          maxZoomPixelRatio: 2,
          minZoomLevel: 1,
          visibilityRatio: 1,
          zoomPerScroll: 2,
          debugMode: true,
        });

        viewer.addHandler("open-failed", (event: OpenSeadragon.OpenFailedEvent) => {
          console.error("Failed to open tile source:", event);
        });

        viewer.addHandler("tile-load-failed", (event: OpenSeadragon.TileLoadFailedEvent) => {
          console.error("Failed to load tile:", event);
        });

        viewer.addOnceHandler("open", () => {
          console.log("Successfully opened tile source");
        });
      } catch (error) {
        console.error("Error initializing OpenSeadragon:", error);
      }
    };

    initializeViewer();

    return () => {
      if (viewer && typeof viewer.destroy === 'function') {
        viewer.destroy();
      }
    };
  }, []);

  return (
    <div ref={viewerRef} className="w-full h-64 md:h-96 lg:h-128"></div>
  );
}