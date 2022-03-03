module.exports = {
  platform: "gitlab",
  endpoint: "https://gitlab.com/api/v4/",
  baseBranches: ["master"],
  labels: ["renovate"],
  rebaseWhen: "auto",
  automerge: true,
  automergeType: "branch",
  semanticCommits: true,
  major: {
    automerge: false,
  },
  repositories: ["l1/game-client-mobi"],
  extends: ["config:base", ":pinAllExceptPeerDependencies"],
};
