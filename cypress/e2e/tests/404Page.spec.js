describe.only("404 Page Test", () => {
  const invalidUrls = [
    "non-existent-page",
    "invalid-url",
    "missing-page",
    "aboutt",
    "contat",
    "prrogram",
    "xyz123",
    "abc-def",
    "!@#$%^&*()",
    "images/missing-image.png",
    "scripts/missing-script.js",
    "styles/missing-style.css",
  ];

  const heroPages = [
    "",
    "physical-phil",
    "nourished-nick",
    "connected-kai",
    "rested-rohan",
    "switched-on-sam",
    "educated-enzo",
  ];

  heroPages.forEach((hero) => {
    invalidUrls.forEach((url) => {
      it(`should display 404 page for ${hero}/${url}`, () => {
        cy.visit(`/${hero}/${url}`, { failOnStatusCode: false });
        cy.contains("Oops, looks like you’ve lost your powers.").should(
          "be.visible"
        );
        cy.contains(
          "Something went wrong! Head back home to power back up."
        ).should("be.visible");
        cy.contains("Go back home").should("be.visible");
        cy.contains("Take the Hero test").should("be.visible");
        cy.contains("Return home").should("be.visible");
        cy.contains("Find a Doctor").should("be.visible");
        cy.contains("Copy page link").should("be.visible");
        cy.contains("Take the Test").should("be.visible");
      });
    });
  });
});
