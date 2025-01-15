"use client";

import dynamic from "next/dynamic";
import styles from "./BannerPage.module.css";
import overlayData from "../../banner_coords.json";

const DynamicBanner = dynamic(() => import("../components/Banner"), {
  ssr: false,
});

export default function BannerPage() {
  return (
    <div className={styles.container}>
      <DynamicBanner tileSource="/img/banner_dzi.dzi" overlays={overlayData} />
    </div>
  );
}
