import fs from "fs";
import path from "path";
import HomeClient from "./HomeClient";
import type { SectionConfig } from "./types";

export const dynamic = "force-static"; // Ensure static generation at build-time

export default async function Page() {
  const getSectionMetadata = (
    id: string,
    displayName: string,
    folderName: string,
    defaultStart: number,
    defaultEnd: number,
    scrollHeight: number,
    initialPreload: number,
    preloadAhead: number,
    preloadBehind: number,
    cacheSize: number,
    isActive: boolean
  ): SectionConfig => {
    const dir = path.join(process.cwd(), "public/frames", folderName);
    let firstFrame = defaultStart;
    let lastFrame = defaultEnd;
    let totalFrames = lastFrame - firstFrame + 1;

    try {
      if (fs.existsSync(dir)) {
        const files = fs
          .readdirSync(dir)
          .filter((file) => file.startsWith("frame_") && file.endsWith(".webp"))
          .sort();

        if (files.length > 0) {
          const parseFrameNum = (filename: string) => {
            const parts = filename.split("_");
            if (parts.length > 1) {
              return parseInt(parts[1].split(".")[0], 10);
            }
            return 0;
          };
          firstFrame = parseFrameNum(files[0]);
          lastFrame = parseFrameNum(files[files.length - 1]);
          totalFrames = files.length;
        }
      }
    } catch (e) {
      console.error(`Error programmatically deriving metadata for ${folderName}:`, e);
    }

    return {
      id,
      displayName,
      folder: `/frames/${folderName}`,
      firstFrame,
      lastFrame,
      totalFrames,
      scrollHeight,
      initialPreload,
      preloadAhead,
      preloadBehind,
      cacheSize,
      isActive,
    };
  };

  const sections: SectionConfig[] = [
    getSectionMetadata(
      "section1",
      "Section 1",
      "Section 1",
      294,
      2031,
      6000,       // 1,738 frames ÷ 6000vh ≈ 0.29 frames/vh — smooth, no skipping
      12,         // initialPreload: load first 12 frames before showing (progressive load in bg)
      80,         // preloadAhead: prefetch 80 frames ahead of scroll position
      40,         // preloadBehind: keep 40 frames behind for smooth backward scroll
      300,        // cacheSize: max 300 frames in memory
      true
    ),
    getSectionMetadata(
      "section2",
      "Section 2",
      "Section 2",
      2044,
      2761,
      2500,       // 718 frames ÷ 2500vh ≈ 0.29 frames/vh
      0,          // initialPreload: not first section
      80,
      40,
      300,
      true
    ),
  ];

  return <HomeClient sections={sections} />;
}
