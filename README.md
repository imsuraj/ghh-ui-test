**To run the test**

1. Get PERCY_TOKEN, FIGMA_TOKEN and FIGMA_FILE_TOKEN
2. Export all token in the environment.
3. Navigate to the project folder and run below commands.
   `npm install`
   `npx percy-figma`
   `npx percy exec -- cypress run --spec cypress/e2e/tests/homePage.spec.js `
