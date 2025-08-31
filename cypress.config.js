const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {

    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    video: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: false,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      // 📌 Allure plugin
      allureWriter(on, config);
      return config;
    },
  },

  // Default run mode (CLI `npx cypress run`)
  // will be headless unless overridden
  defaultCommandTimeout: 8000,
  chromeWebSecurity: false,
});
