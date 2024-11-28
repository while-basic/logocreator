import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const logos = await prisma.logo.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(logos);
  } catch (error) {
    console.error("[LOGO_HISTORY_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
