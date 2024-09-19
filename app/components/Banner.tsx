import OpenSeadragon from "openseadragon";
import { useEffect, useRef } from "react";

export default function Banner() {
  const viewerRef = useRef<OpenSeadragon.Viewer | null>(null);

  useEffect(() => {
    if (!viewerRef.current) {
      const tileSource = "/img/banner_dzi.dzi";
      console.log("Attempting to load tile source:", tileSource);

      try {
        viewerRef.current = OpenSeadragon({
          id: "openseadragon",
          prefixUrl: "/openseadragon/images/",
          tileSources: tileSource,
          animationTime: 0.5,
          blendTime: 0.1,
          constrainDuringPan: true,
          maxZoomPixelRatio: 2,
          minZoomLevel: 1,
          visibilityRatio: 1,
          zoomPerScroll: 2,
          debugMode: true,  // Enable debug mode for more detailed logging
        });

        viewerRef.current.addHandler("open-failed", (event) => {
          console.error("Failed to open tile source:", event);
        });

        viewerRef.current.addHandler("tile-load-failed", (event) => {
          console.error("Failed to load tile:", event);
        });

        viewerRef.current.addOnceHandler("open", () => {
          console.log("Successfully opened tile source");
        });
      } catch (error) {
        console.error("Error initializing OpenSeadragon:", error);
      }
    }

    return () => {
      viewerRef.current?.destroy();
    };
  }, []);

  return (
    <div id="openseadragon" className="w-full h-64 md:h-96 lg:h-128"></div>
  );
}