"use client";

import React, { useEffect, useRef } from "react";
import OpenSeadragon from "openseadragon";

interface OverlayData {
  x: number;
  y: number;
  width: number;
  height: number;
  url: string;
  subject: string;
}

interface BannerProps {
  tileSource: string;
  overlays: OverlayData[];
}

export default function Banner({ tileSource, overlays }: BannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<OpenSeadragon.Viewer | null>(null);

  useEffect(() => {
    // If container is null, just return
    if (!containerRef.current) return;

    // Dynamically import OpenSeadragon (necessary if using Next.js + SSR)
    const initializeViewer = async () => {
      const OSD = (await import("openseadragon")).default;

      // Non-null assertion here: containerRef.current!
      // since we've already checked if it's null
      const viewer = OSD({
        element: containerRef.current!,
        tileSources: tileSource,
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        defaultZoomLevel: 0.1,
        minZoomLevel: 0.0001,
        maxZoomLevel: 500,
        maxZoomPixelRatio: 10,
        minZoomImageRatio: 0.9,
        immediateRender: true,
        minPixelRatio: 0.1,
        visibilityRatio: 1.0,
        constrainDuringPan: true,
        showNavigationControl: false,
        springStiffness: 7,
        animationTime: 0.5,
        blendTime: 0,
        gestureSettingsTouch: {
          pinchRotate: false,
          zoomToRefPoint: true,
          flickEnabled: true,
          flickMinSpeed: 20,
          flickMomentum: 0.4,
        } as OpenSeadragon.GestureSettings,
      });

      viewer.addHandler("open", () => {
        const tiledImage = viewer.world.getItemAt(0);
        if (!tiledImage) return;

        // Equivalent to "setting home bounds":
        viewer.viewport.fitBounds(tiledImage.getBounds(true), true);
        viewer.viewport.fitHorizontally(true);

        const contentSize = tiledImage.getContentSize();
        overlays.forEach((overlay) => {
          const element = document.createElement("div");
          element.style.position = "absolute";
          element.style.cursor = "pointer";
          element.style.width = "100%";
          element.style.height = "100%";
          element.style.background = "rgba(255, 255, 255, 0.0)";
          element.style.border = "2px solid transparent";
          element.style.transition = "all 0.2s ease";

          element.onmouseover = () => {
            element.style.background = "rgba(255, 255, 255, 0.2)";
            element.style.border = "2px solid rgba(255, 255, 255, 0.4)";
          };
          element.onmouseout = () => {
            element.style.background = "rgba(255, 255, 255, 0.0)";
            element.style.border = "2px solid transparent";
          };

          const topLeft = viewer.viewport.imageToViewportCoordinates(
            overlay.x * contentSize.x,
            overlay.y * contentSize.y
          );
          const bottomRight = viewer.viewport.imageToViewportCoordinates(
            (overlay.x + overlay.width) * contentSize.x,
            (overlay.y + overlay.height) * contentSize.y
          );

          const overlayRect = new OpenSeadragon.Rect(
            topLeft.x,
            topLeft.y,
            bottomRight.x - topLeft.x,
            bottomRight.y - topLeft.y
          );

          new OpenSeadragon.MouseTracker({
            element,
            clickHandler: () => {
              const url = overlay.url.startsWith("http")
                ? overlay.url
                : `https://${overlay.url}`;
              window.open(url, "_blank");
              return false;
            },
          });

          viewer.addOverlay({
            element,
            location: overlayRect,
            placement: OpenSeadragon.Placement.TOP_LEFT,
            checkResize: false,
          });
        });
      });

      viewerRef.current = viewer;
    };

    initializeViewer();

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, [tileSource, overlays]);

  // Use overflow: hidden on the container to prevent scrollbars
  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    />
  );
}
