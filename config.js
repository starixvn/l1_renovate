module.exports = {
  platform: "gitlab",
  endpoint: "https://git3.nexdev.net/api/v4/",
  forkProcessing: "enabled",
  logFile: "renovate.log.json",
  onboardingConfig: {
    extends: ["local>l1/renovate"],
  },
  npmrc: "registry=http://npm.lumigame.com/",
};
