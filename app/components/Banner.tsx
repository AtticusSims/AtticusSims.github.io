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
        element: viewerRef.current,
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
        if (!viewer) return;

        try {
          const tiledImage = viewer.world.getItemAt(0);
          if (!tiledImage) {
            console.error("No source found after open");
            return;
          }

          viewer.viewport.homeBounds = tiledImage.getBounds(true);
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
