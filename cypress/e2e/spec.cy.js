require("../../src/support");

describe("cypress-get-by-label", () => {
  it("find the elements", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.getByLabel("Username");
  });

  it("query db", () => {
    cy.queryDB("SELECT * FROM ANTFIN.market", false);
  });
});
