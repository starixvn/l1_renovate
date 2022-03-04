module.exports = {
  platform: "gitlab",
  endpoint: "https://git3.nexdev.net/api/v4/",
  token: process.env.RENOVATE_TOKEN,
  logFile: "renovate.log.json",
  baseBranches: ["master"],
  assignees: ["alvin.nguyen"],
  onboardingConfig: {
    extends: ["config:base"],
  },
  repositories: ["l1/game-services/night-club"],
};
