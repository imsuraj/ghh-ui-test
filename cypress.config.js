const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 20000,
  video: true,

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportDir: "cypress/reports",
    reportFilename: "[status]_[datetime]-[name]-report",
    overwrite: false,
    html: true,
    json: true,
    reportPageTitle: "Cannabizelite Automation Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    code: true,
    autoOpen: false,
  },

  env: {
    // "cypress-plugin-snapshots": {
    //   imageConfig: {
    //     threshold: 0.01,
    //   },
    // },
  },

  e2e: {
    chromeWebSecurity: false,
    experimentalWebKitSupport: true,
    experimentalOriginDependencies: true,
    // experimentalSessionAndOrigin: true,
    baseUrl: "https://dev.ghh.scssconsultingapps.com.au/",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // return getCompareSnapshotsPlugin(on, config);
    },
    excludeSpecPattern: [
      "**/cypress/e2e/1-getting-started",
      "**/cypress/e2e/2-advanced-examples",
      "**/__snapshots__/*",
      "**/__image_snapshots__/*",
    ],
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    browser: "electron", // Set the browser to be used for testing
  },

  // Address secure coding warning
  applicationSupportsSecureRestorableState: () => true,

  // Specify a different port to avoid conflict
  port: 3000, // Change the port number to a different one if 2121 is in use
});
