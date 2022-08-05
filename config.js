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
  hostRules: [
    {
      matchHost: "npm.lumigame.com",
      hostType: "npm",
      token: "mMJqIbXHrN2TR1whwCaZh5BERPc7kHDHfgBAYQ7GYJw=",
      authType: "Basic",
    },
  ],
};
