"use client";

import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const DeleteIssueButton = () => {
  const issueId = useParams().id;
  const navigator = useRouter();

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red">Delete</Button>
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
              <Button
                color="red"
                onClick={() => {
                  axios.delete(`/api/issues/${issueId}`);
                  navigator.push("/issues");
                  navigator.refresh();
                }}
              >
                Delete
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
