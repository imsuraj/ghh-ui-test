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

  invalidUrls.forEach((url) => {
    it(`should display 404 page for ${url} on landing page`, () => {
      cy.visit(`/${url}`, {
        failOnStatusCode: false,
      });
      cy.contains("Oops, looks like you’ve lost your powers. ").should(
        "be.visible"
      );
      cy.contains(
        "Something went wrong! Head back home to power back up. "
      ).should("be.visible");
      cy.contains("Go back home").should("be.visible");
      cy.contains("Take the hero test").should("be.visible");
      cy.contains("Return home").should("be.visible");
      cy.contains("Find a Doctor").should("be.visible");
      cy.contains("Copy page link").should("be.visible");
      cy.contains("Take the Test").should("be.visible");
    });
  });

  invalidUrls.forEach((url) => {
    it(`should display 404 page for physical-phil/${url} on hero page`, () => {
      cy.visit(`physical-phil/${url}`, {
        failOnStatusCode: false,
      });
      cy.contains("Oops, looks like you’ve lost your powers. ").should(
        "be.visible"
      );
      cy.contains(
        "Something went wrong! Head back home to power back up. "
      ).should("be.visible");
      cy.contains("Go back home").should("be.visible");
      cy.contains("Take the hero test").should("be.visible");
      cy.contains("Return home").should("be.visible");
      cy.contains("Find a Doctor").should("be.visible");
      cy.contains("Copy page link").should("be.visible");
      cy.contains("Take the Test").should("be.visible");
    });
  });
});
