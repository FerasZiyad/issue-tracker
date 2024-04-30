"use client";

import { Spinner } from "@/app/components";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const DeleteIssueButton = () => {
  const issueId = useParams().id;
  const navigator = useRouter();

  const [error, setError] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const deleteBug = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(`/api/issues/${issueId}`);
      navigator.push("/issues/list");
      navigator.refresh();
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red" disabled={isDeleting}>
            Delete
            {isDeleting && <Spinner />}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Delete Issue</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this issue? please note that this
            action cannot be undone
          </AlertDialog.Description>
          <Flex gap="3" mt="4">
            <AlertDialog.Cancel>
              <Button color="gray" variant="soft">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="red" onClick={deleteBug}>
                Delete Issue
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            having issue while deleting this bug
          </AlertDialog.Description>
          <AlertDialog.Action>
            <Button
              onClick={() => setError(false)}
              mt="2"
              color="gray"
              variant="soft"
            >
              OK
            </Button>
          </AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
