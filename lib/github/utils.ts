import { createAppAuth } from "@octokit/auth-app";
import { Octokit } from "@octokit/rest";

import { GITHUB_APP_APP_ID, GITHUB_APP_PRIVATE_KEY } from "../constants";


export const getOctokitInstance = (installationId: number) => {
  if (!installationId) {
    throw new Error("No installation id provided");
  }

  const octokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: GITHUB_APP_APP_ID!,
      privateKey:GITHUB_APP_PRIVATE_KEY!,
      installationId,
    },
  });

  return octokit;
};
