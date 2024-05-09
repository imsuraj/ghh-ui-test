/**
 *  Smartphones

1. iPhone (Standard models like iPhone X, XR, 11, 12, 13, 14)
   - Portrait: 375  pixels
   - Landscape: 812  pixels

2. iPhone Plus/Max/Pro Max models (8 Plus, 11 Pro Max, 12 Pro Max)
   - Portrait: 414  pixels
   - Landscape: 896  pixels

3. Samsung Galaxy S (S8, S9, S10, S20, S21, S22)
   - Portrait: 360  pixels
   - Landscape: 740  pixels

4. Google Pixel (Pixel 3, 4, 5, 6)
   - Portrait: 393  pixels
   - Landscape: 851  pixels

 Tablets

1. iPad Mini/Air/Pro 9.7"
   - Portrait: 768  pixels
   - Landscape: 1024  pixels

2. iPad Pro 10.5"
   - Portrait: 834  pixels
   - Landscape: 1112  pixels

3. iPad Pro 12.9"
   - Portrait: 1024  pixels
   - Landscape: 1366  pixels

 Large Tablets/Small Laptops

1. Surface Pro
   - Portrait: 768  pixels
   - Landscape: 1024  pixels
 */

describe("GHH", () => {
  it.only("landing page", () => {
    cy.visit("/");
    cy.wait(5000).then(() => {
      cy.get("img[alt='close']").click();
      cy.wait(2000);
      cy.viewport(2048, 1280);
      cy.wait(200);
      cy.viewport(1980, 1080);
      cy.wait(200);
      cy.viewport(1792, 1120);
      cy.wait(200);
      cy.viewport("macbook-16");
      cy.wait(200);
      cy.viewport("macbook-15");
      cy.wait(200);
      cy.viewport("macbook-13");
      cy.wait(200);
      cy.viewport("macbook-11");
      cy.wait(200);
      cy.viewport("ipad-2");
      cy.wait(200);
      cy.viewport("ipad-mini");
      cy.wait(200);
      cy.viewport("iphone-x");
      cy.wait(200);
      cy.viewport("iphone-xr");
      cy.wait(200);
      cy.viewport("iphone-se2");
      cy.wait(200);
      cy.viewport("samsung-note9");
      cy.wait(200);
      cy.viewport("samsung-s10");
      cy.wait(200);
      //landscape
      cy.viewport("ipad-2", "landscape");
      cy.wait(200);
      cy.viewport("ipad-mini", "landscape");
      cy.wait(200);
      cy.viewport("iphone-x", "landscape");
      cy.wait(200);
      cy.viewport("iphone-xr", "landscape");
      cy.wait(200);
      cy.viewport("iphone-se2", "landscape");
      cy.wait(200);
      cy.viewport("samsung-note9", "landscape");
      cy.wait(200);
      cy.viewport("samsung-s10", "landscape");
      cy.wait(200);
      cy.percySnapshot("Landing Page", {
        widths: [768, 1200, 1440, 1580, 1792, 1920],
      });
      // cy.wait(2000);
      // cy.percySnapshot("Landing Page Mobile", {
      //   widths: [360, 375, 390, 414, 740, 812, 896],
      // });
    });
  });

  it("landing page web", () => {
    cy.visit("/");
    cy.wait(10000).then(() => {
      cy.percySnapshot("Landing Page", { widths: [768, 1200, 1440, 1580] });
    });
  });
});
