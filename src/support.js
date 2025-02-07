Cypress.Commands.add("getByLabel", (label) => {
  cy.contains("label", new RegExp(`^${label}$`))
    .invoke("attr", "for")
    .then((id) => {
      cy.get("#" + id);
    });
});

Cypress.Commands.add("queryDB", (queryOrPath, options) => {
  cy.task("queryDB", { queryOrPath, options });
});
