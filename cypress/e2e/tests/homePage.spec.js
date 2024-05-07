describe("GHH", () => {
  it.only("landing page", () => {
    cy.visit("/");
    cy.wait(10000).then(() => {
      cy.percySnapshot("Landing Page", { widths: [768, 1200, 1440, 1580] });
      // cy.wait(2000);
      cy.percySnapshot("Landing Page Mobile", { widths: [390] });
    });
  });

  it("landing page web", () => {
    cy.visit("/");
    cy.wait(10000).then(() => {
      cy.percySnapshot("Landing Page", { widths: [768, 1200, 1440, 1580] });
    });
  });
});
