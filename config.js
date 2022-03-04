module.exports = {
  platform: "gitlab",
  endpoint: "https://git3.nexdev.net/api/v4/",
  token: process.env.RENOVATE_TOKEN,
  labels: ["renovate", "dependencies", "automated"],
  onboarding: true,
  onboardingConfig: {
    extends: ["config:base"],
  },
  repositories: ["l1/game-client-mobi"],
};
