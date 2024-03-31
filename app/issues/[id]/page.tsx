import { IssueStatusBadge } from "@/app/components";
import prisma from "@/prisma/db";
import { Box, Button, Card, Flex, Grid, Heading, Link } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";

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
    <Grid gap="4" columns={{ initial: "1", md: "2" }}>
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex gap="3" my="2">
          <IssueStatusBadge status={issue.status} />
          <p>{issue.createdAt.toDateString()}</p>
        </Flex>
        <Card className="mt-5 prose">
          <Markdown>{issue.description}</Markdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link style={{ color: "white" }} href={`/issues/${issue.id}/edit`}>
            <span>Edit Issues</span>
          </Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssuesDetailPage;
