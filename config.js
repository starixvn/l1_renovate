module.exports = {
  platform: "gitlab",
  endpoint: "https://git3.nexdev.net/api/v4/",
  includeForks: true,
  logFile: "renovate.log.json",
  onboardingConfig: {
    extends: ["local>l1/renovate"],
  },
  npmrc: "registry=http://npm.lumigame.com/",
};
