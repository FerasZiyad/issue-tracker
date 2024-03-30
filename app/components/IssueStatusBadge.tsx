import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const issueStatusMap: Record<
  Status,
  { label: string; color: "red" | "green" | "violet" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "IN_PROGRESS", color: "violet" },
  CLOSED: { label: "CLOSED", color: "green" },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={issueStatusMap[status].color}>
      {issueStatusMap[status].label}
    </Badge>
  );
};

export default IssueStatusBadge;
