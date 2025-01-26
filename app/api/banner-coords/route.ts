import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public/data/banner-coords.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const coords = JSON.parse(fileContents);
    return NextResponse.json(coords);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read coordinates" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const coords = await request.json();
    const filePath = path.join(process.cwd(), "public/data/banner-coords.json");
    await fs.writeFile(filePath, JSON.stringify(coords, null, 2));
    return NextResponse.json({ message: "Coordinates updated successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update coordinates" },
      { status: 500 }
    );
  }
}
