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

const Banner: React.FC<BannerProps> = ({ tileSource, overlays }) => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    let viewer: OpenSeadragon.Viewer | null = null;

    const initializeViewer = async () => {
      const OpenSeadragonModule = await import("openseadragon");
      const OpenSeadragonInstance = OpenSeadragonModule.default;

      viewer = OpenSeadragonInstance({
        element: viewerRef.current!,
        tileSources: tileSource,
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",

        // Zoom settings
        defaultZoomLevel: 0.1,
        minZoomLevel: 0.1,
        maxZoomLevel: 500,
        maxZoomPixelRatio: 10,
        minZoomImageRatio: 0.9,

        // Performance settings
        immediateRender: true,
        minPixelRatio: 0.1,
        visibilityRatio: 1.0,

        // Navigation settings
        constrainDuringPan: true,
        showNavigationControl: false,

        // Animation settings
        springStiffness: 7,
        animationTime: 0.5,
        blendTime: 0,

        // Mobile settings
        gestureSettingsTouch: {
          pinchRotate: false,
          zoomToRefPoint: true,
          pinchMaxZoom: 500,
          flickEnabled: true,
          flickMinSpeed: 20,
          flickMomentum: 0.4,
          springStiffness: 5.0,
        } as OpenSeadragon.GestureSettings,
      });

      viewer.addHandler("open", () => {
        if (!viewer) return;

        try {
          const source = viewer.world.getItemAt(0);
          if (!source) {
            console.error("No source found after open");
            return;
          }

          // Get image dimensions and calculate initial zoom
          const contentSize = source.getContentSize();
          const containerSize = viewer.viewport.getContainerSize();

          // First fit the image to the viewport
          viewer.viewport.goHome();

          // Then calculate the zoom needed to fit the height
          const bounds = viewer.viewport.getBounds();
          const viewportHeight = bounds.height;
          const zoom = 1.0 / viewportHeight; // This makes the image fill the height

          // Apply the zoom and center
          viewer.viewport.zoomTo(zoom, undefined, true);
          viewer.viewport.panTo(viewer.viewport.getCenter(true), true);

          // Add overlays
          overlays.forEach((overlay) => {
            const element = document.createElement("div");
            element.style.position = "absolute";
            element.style.cursor = "pointer";
            element.style.width = "100%";
            element.style.height = "100%";
            element.style.background = "rgba(255, 255, 255, 0.0)";
            element.style.border = "2px solid transparent";
            element.style.transition = "all 0.2s ease";

            // Hover effect
            element.onmouseover = () => {
              element.style.background = "rgba(255, 255, 255, 0.2)";
              element.style.border = "2px solid rgba(255, 255, 255, 0.4)";
            };
            element.onmouseout = () => {
              element.style.background = "rgba(255, 255, 255, 0.0)";
              element.style.border = "2px solid transparent";
            };

            // Convert image coordinates to viewport coordinates
            const topLeft = viewer!.viewport.imageToViewportCoordinates(
              overlay.x * contentSize.x,
              overlay.y * contentSize.y
            );
            const bottomRight = viewer!.viewport.imageToViewportCoordinates(
              (overlay.x + overlay.width) * contentSize.x,
              (overlay.y + overlay.height) * contentSize.y
            );

            const viewportRect = new OpenSeadragon.Rect(
              topLeft.x,
              topLeft.y,
              bottomRight.x - topLeft.x,
              bottomRight.y - topLeft.y
            );

            // Use MouseTracker for better click handling
            new OpenSeadragon.MouseTracker({
              element: element,
              clickHandler: function () {
                // Add http:// if not present
                const url = overlay.url.startsWith("http")
                  ? overlay.url
                  : `https://${overlay.url}`;
                window.open(url, "_blank");
                return false; // Prevent default behavior
              },
            });

            viewer!.addOverlay({
              element: element,
              location: viewportRect,
              placement: OpenSeadragon.Placement.TOP_LEFT,
              checkResize: false,
            });
          });
        } catch (error) {
          console.error("Error in open handler:", error);
        }
      });
    };

    initializeViewer();

    return () => {
      if (viewer && typeof viewer.destroy === "function") {
        viewer.destroy();
      }
    };
  }, [tileSource, overlays]);

  return <div ref={viewerRef} style={{ width: "100%", height: "100%" }} />;
};

export default Banner;
