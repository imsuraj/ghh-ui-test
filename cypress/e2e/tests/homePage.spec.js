describe("GHH", () => {
  beforeEach("Launch URL", () => {
    cy.visit("/");
    cy.wait(10000);
    // cy.get("img[alt='close']").click();
    // cy.wait(2000);
  });
  it("landing page test", () => {
    cy.percySnapshot("Landing Page", { widths: [1440] });
    cy.percySnapshot("Landing Page Mobile", { widths: [390] });
  });

  it("hero page test", () => {
    cy.contains("Meet Phil").click();
    cy.wait(10000).then(() => {
      cy.percySnapshot("Hero Page", { widths: [1440] });
      cy.percySnapshot("Hero Page Mobile", { widths: [390] });
    });
  });

  it("404 page test", () => {
    cy.visit("/invalidUrl", { failOnStatusCode: false });
    cy.wait(5000).then(() => {
      cy.percySnapshot("404 Page", { widths: [1440] });
      cy.percySnapshot("404 Page Mobile", { widths: [390] });
    });
  });
});
