import { Box, Flex, Card } from "@radix-ui/themes";
import React from "react";
import Skeleton from "@/app/components/Skeleton";

const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton height={"2rem"} />
      <Card className="mt-5 prose">
        <Skeleton count={12} />
      </Card>
    </Box>
  );
};

export default IssueFormSkeleton;
