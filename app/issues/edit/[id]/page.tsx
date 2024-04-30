import prisma from "@/prisma/db";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";

type Props = {
  params: { id: string };
};

const IssuesDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: +params.id,
    },
  });

  if (!issue) notFound();

  return (
    <Grid gap="4" columns={{ initial: "1", sm: "5" }}>
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <Flex direction={"column"} gap={"4"}>
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton />
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssuesDetailPage;
