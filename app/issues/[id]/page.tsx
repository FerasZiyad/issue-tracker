import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/db";
import { Card, Flex, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

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
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="3" my="2">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </Flex>
      <Card className="mt-5 prose">
        <Markdown>{issue.description}</Markdown>
      </Card>
    </div>
  );
};

export default IssuesDetailPage;
