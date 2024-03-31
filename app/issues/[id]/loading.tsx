import { Skeleton } from "@/app/components";
import { Box, Card, Flex } from "@radix-ui/themes";

const IssueDetailsLoading = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap="3" my="2">
        <Skeleton />
        <Skeleton />
      </Flex>
      <Card className="mt-5 prose">
        <Skeleton count={5} />
      </Card>
    </Box>
  );
};

export default IssueDetailsLoading;
