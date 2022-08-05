module.exports = {
  platform: "gitlab",
  endpoint: "https://git3.nexdev.net/api/v4/",
  token: "_egQ2_HMtksSFBh9rJzp",
  renovateFork: true,
  logFile: "renovate.log.json",
  baseBranches: ["master"],
  assignees: ["elton.ton"],
  onboardingConfig: {
    extends: ["config:base"],
  },
  repositories: ["l1/game-services/sedie-service"],
};
