const viewPorts = [
  { width: 3072, height: 1920, device: 'MacBook Pro 16" Retina Display' },
  { width: 2880, height: 1800, device: 'MacBook Pro 15" Retina Display' },
  { width: 2560, height: 1600, device: 'MacBook Pro 13" Retina Display' },
  { width: 2560, height: 1440, device: 'iMac 27"' },
  { width: 2048, height: 1280, device: 'iMac 21.5"' },
  { width: 1920, height: 1080, device: "Full HD Desktop/Laptop" },
  { width: 1792, height: 1120, device: "Surface Studio" },
  { width: 1680, height: 1050, device: "Large Desktop/Laptop" },
  { width: 1440, height: 900, device: "Standard Desktop/Laptop" },
  { width: 1366, height: 768, device: "Common Laptop" },
  { width: 1280, height: 800, device: "Small Desktop/Laptop" },
  { width: 1280, height: 800, device: "Android Tablet Landscape" },
  { width: 1024, height: 768, device: "iPad Landscape" },
  { width: 810, height: 1080, device: "Surface Duo" },
  { width: 800, height: 1280, device: "Android Tablet Portrait" },
  { width: 768, height: 1024, device: "iPad Portrait" },
  { width: 414, height: 896, device: "iPhone XR/11/11 Pro Max/12 Pro Max" },
  { width: 390, height: 844, device: "iPhone 12/12 Pro" },
  { width: 375, height: 812, device: "iPhone X/XS/11 Pro" },
  { width: 375, height: 667, device: "iPhone 6/7/8" },
  { width: 360, height: 780, device: "Pixel 5" },
  { width: 360, height: 640, device: "Small Android Devices" },
];

describe("Cross Browser and Viewport Testing", () => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  beforeEach("", () => {
    cy.visit("/");
    cy.wait(5000);
    // cy.get("img[alt='close']").click();
  });

  afterEach("Viewport", () => {
    viewPorts.forEach((viewport) => {
      cy.wait(200).log(`${viewport.device}`);
      cy.viewport(viewport.width, viewport.height);
    });
  });
  it("Landing Page test", () => {
    cy.log(`Testing landing page`);
    cy.get('[href="http://www.instagram.com"] > img').should("be.visible");
  });

  it("Hero Page test", () => {
    cy.log(`Testing hero page`);
    cy.get(
      ":nth-child(1) > .relative.h-full > .px-4 > .flex-col > .font-meno"
    ).trigger("mouseover");
    cy.contains("Meet Phil").click();

    cy.wait(8000);
    cy.contains(".text-xs", "Go back home");
  });
});
