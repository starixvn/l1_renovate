module.exports = {
  platform: "gitlab",
  endpoint: "https://git3.nexdev.net/api/v4/",
  token: "_egQ2_HMtksSFBh9rJzp",
  renovateFork: true,
  logFile: "renovate.log.json",
  assignees: ["elton.ton"],
  onboardingConfig: {
    extends: ["local>l1/renovate"],
  },
  repositories: ["l1/game-services/sedie-service"],
};
