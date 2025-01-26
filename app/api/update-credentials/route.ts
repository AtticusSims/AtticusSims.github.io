import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    const envPath = path.join(process.cwd(), ".env.local");

    const envContent = `NEXT_PUBLIC_ADMIN_USERNAME=${username}\nNEXT_PUBLIC_ADMIN_PASSWORD=${password}`;
    await fs.writeFile(envPath, envContent);

    return NextResponse.json({ message: "Credentials updated successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update credentials" },
      { status: 500 }
    );
  }
}
