describe("GHH", () => {
  beforeEach("", () => {
    cy.visit("/");
    cy.wait(15000);
    cy.get("img[alt='close']").click();
  });
  it("landing page test", () => {
    cy.percySnapshot("Landing Page", { widths: [1440] });
    cy.wait(2000);
    cy.percySnapshot("Landing Page Mobile", { widths: [390] });
  });

  it("hero page test", () => {
    cy.get(
      ":nth-child(1) > .relative.h-full > .px-4 > .flex-col > .font-meno"
    ).trigger("mouseover");
    cy.contains("Meet Phil").click();
    cy.wait(10000).then(() => {
      cy.percySnapshot("Hero Page", { widths: [1440] });
      cy.percySnapshot("Hero Page Mobile", { widths: [390] });
    });
  });
});
