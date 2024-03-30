import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Box, Heading, Flex, Card } from "@radix-ui/themes";
import React from "react";
import Markdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailsPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap="3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="mt-5 prose">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailsPage;
