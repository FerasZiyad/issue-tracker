"use client";

import { Button } from "@radix-ui/themes";
import delay from "delay";
import { useRouter } from "next/navigation";
import React from "react";

const IssueActions = () => {
  const router = useRouter();
  return (
    <div className="mb-5">
      <Button onClick={() => router.push("/issues/new")}>New Issue</Button>
    </div>
  );
};

export default IssueActions;
