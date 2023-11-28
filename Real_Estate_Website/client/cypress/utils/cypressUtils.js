export function signInAsAdmin() {
    cy.get('.dropdown-content').find("#adminloginlink").click({force: true})
    cy.location("pathname").should('eq', "/user/loginadmin")
    cy.get("#username").type("Admin").should("have.value","Admin")
    cy.get("#password").type("admin").should("have.value","admin")
    cy.get(".user-login-button").click()
    cy.wait(1000)
}

export function signInAsBroker() {
    cy.get('.dropdown-content').find("#brokerloginlink").click({force: true})
    cy.location("pathname").should('eq', "/user/loginbroker")
    cy.get("#username").type("CypressBroker").should("have.value", "CypressBroker")
    cy.get("#password").type("!Q2w3e4r").should("have.value", "!Q2w3e4r")
    cy.get(".user-login-button").click()
    cy.wait(1000)
}

export function signInAsUser() {
    cy.get('.dropdown-content').find("#userloginlink").click({force: true})
    cy.location("pathname").should('eq', "/user/loginuser")
    cy.get("#username").type("CypressUser").should("have.value", "CypressUser")
    cy.get("#password").type("!Q2w3e4r").should("have.value", "!Q2w3e4r")
    cy.get(".user-login-button").click()
    cy.wait(1000)
}