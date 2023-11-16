beforeEach(() => {
  cy.visit('http://localhost:5173/')
})

describe('displayProperties', () => {
  it('should be able to visit the homepage, and then click on the properties button', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("li", "Properties").click()
    cy.location("pathname").should('eq',"/property")
  })
})

/*
describe("addProperties", () => {
  it("Should be able to create a new property.", () => {
    cy.contains("li", "Add Property").click()
    cy.location("pathname").should('eq', "/property/create")
    cy.get("input[name='title']").type("Cypress Test").should("have.value",
        "Cypress Test")
    cy.get("input[name='description']").type("Cypress Description").should("have.value",
        "Cypress Description")
    cy.get("input[name='price']").type("1234567").should("have.value",
        "01234567")
    cy.get("input[name='address']").type("Test Address St.").should("have.value",
        "Test Address St.")
    cy.get("input[name='city']").type("Cypress City").should("have.value",
        "Cypress City")
    cy.get("input[name='country']").type("Cypress Country").should("have.value",
        "Cypress Country")
    cy.get("input[name='image']").type("https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D")
        .should("have.value", "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D")
    cy.get("input[name='facilities']").type("{upArrow}{upArrow}").should("have.value", "2")
    cy.get("input[name='brokerEmail']").type("johnny.aldeb@gmail.com").should("have.value",
        "johnny.aldeb@gmail.com")
    cy.get("button[name='submit']").click()
    cy.go("back")
  })
})
*/

describe("CreateUser", () => {
  it("should be able to create a new user", () => {
    cy.visit("http://localhost:5173/user/loginuser/")
    cy.contains("span","Sign Up").click()
    cy.location("pathname").should('eq', "/user/registeruser")
    cy.get("#username").type("Cypress").should("have.value", "Cypress")
    cy.get("#email").type("Cypress@email.com").should("have.value", "Cypress@email.com")
    cy.get("#password").type("!Q2w3e4r").should("have.value", "!Q2w3e4r")
    cy.get("#confirm_pwd").type("!Q2w3e4r").should("have.value", "!Q2w3e4r")
    cy.get(".user-login-button").click()

  })
})