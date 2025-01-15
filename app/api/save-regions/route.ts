import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const regions = await request.json();

    // Validate regions data
    if (!Array.isArray(regions)) {
      return NextResponse.json(
        { error: "Invalid regions data" },
        { status: 400 }
      );
    }

    for (const region of regions) {
      if (
        typeof region.x !== "number" ||
        typeof region.y !== "number" ||
        typeof region.width !== "number" ||
        typeof region.height !== "number"
      ) {
        return NextResponse.json(
          { error: "Invalid region format" },
          { status: 400 }
        );
      }
    }

    // Save to banner_coords.json
    const filePath = path.join(process.cwd(), "banner_coords.json");
    await writeFile(filePath, JSON.stringify(regions, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving regions:", error);
    return NextResponse.json(
      { error: "Failed to save regions" },
      { status: 500 }
    );
  }
}
