import prisma from "@/prisma/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import authOptions from "../../auth/authOptions";
import { issueFormSchema } from "../validationSchema";

export const PATCH = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  const validation = issueFormSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const issue = await prisma.issue.findUnique({
    where: {
      id: +params.id,
    },
  });

  if (!issue)
    return NextResponse.json({ message: "Issue not found" }, { status: 404 });

  const EditedIssue = await prisma.issue.update({
    where: { id: +params.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(EditedIssue, { status: 200 });
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const issue = await prisma.issue.findUnique({
    where: { id: +params.id },
  });

  if (!issue)
    return NextResponse.json(
      { error: "This issue is not existed" },
      { status: 404 }
    );

  await prisma.issue.delete({
    where: { id: +params.id },
  });

  return NextResponse.json({ status: 200 });
};
