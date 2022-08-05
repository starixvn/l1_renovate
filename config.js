module.exports = {
  platform: "gitlab",
  endpoint: "https://git3.nexdev.net/api/v4/",
  token: "_egQ2_HMtksSFBh9rJzp",
  includeForks: true,
  logFile: "renovate.log.json",
  assignees: ["elton.ton"],
  onboardingConfig: {
    extends: ["local>l1/renovate-bot/renovate-runner:renovate.json"],
  },
  repositories: ["l1/game-services/sedie-service"],
  npmrc: "registry=http://npm.lumigame.com/"
};
