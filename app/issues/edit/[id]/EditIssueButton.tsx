import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link style={{ color: "white" }} href={`/issues/${issueId}/edit`}>
        <span>Edit Issues</span>
      </Link>
    </Button>
  );
};

export default EditIssueButton;
