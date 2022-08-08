module.exports = {
  platform: "gitlab",
  endpoint: "https://git3.nexdev.net/api/v4/",
  token: "_egQ2_HMtksSFBh9rJzp",
  includeForks: true,
  logFile: "renovate.log.json",
  assignees: ["elton.ton"],
  onboardingConfig: {
    $schema: "https://docs.renovatebot.com/renovate-schema.json",
    extends: ["config:base"],
    packageRules: [
      {
        matchDepTypes: ["dependencies"],
        matchUpdateTypes: ["minor", "major", "patch", "pin", "digest"],
        matchPackageNames: ["sc-game-base"],
        excludePackageNames: ["*"]
      },
    ],
    dependencyDashboard: true
  },
  npmrc: "registry=http://npm.lumigame.com/",
};
