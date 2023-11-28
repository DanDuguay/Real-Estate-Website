import { signInAsAdmin, signInAsBroker, signInAsUser} from "../utils/cypressUtils.js";

beforeEach(() => {
  cy.visit('http://localhost:5173/')
})

describe("CreateUser", () => {
  it("should be able to create a new user", () => {
    cy.visit("http://localhost:5173/user/loginuser/")
    cy.contains("span","Sign Up").click()
    cy.location("pathname").should('eq', "/user/registeruser")
    cy.get("#username").type("CypressUser").should("have.value", "CypressUser")
    cy.get("#email").type("CypressUser@email.com").should("have.value", "CypressUser@email.com")
    cy.get("#password").type("!Q2w3e4r").should("have.value", "!Q2w3e4r")
    cy.get("#confirm_pwd").type("!Q2w3e4r").should("have.value", "!Q2w3e4r")
    cy.get(".user-login-button").click()
  })
});

describe("log in as User", () => {
  it("should be able to click on 'Log in as User' in the nav bar, then sign in using the created user.", () => {
    cy.get('.dropdown-content').find("#userloginlink").click({force: true})
    cy.location("pathname").should('eq', "/user/loginuser")
    cy.get("#username").type("CypressUser").should("have.value", "CypressUser")
    cy.get("#password").type("!Q2w3e4r").should("have.value", "!Q2w3e4r")
    cy.get(".user-login-button").click()
  })
});

describe("Use Mortgage Calculator", () => {
  it("should be able to reach and use the mortgage calculator as a user", () => {
    signInAsUser()
    cy.contains("li", "User Profile").click()
    cy.location("pathname").should("eq", "/userprofile")
    cy.wait(1000)
    cy.contains("li", "Mortgage Calculator").click()
    cy.location("pathname").should("eq","/mortgagecalculator")
    cy.get("#homePrice").type("250000").should("have.value", "250000")
    cy.get("#downPayment").type("50000").should("have.value","50000")
    cy.get("#monthlyInterestRate").type("7.03").should("have.value","7.03")
    cy.get("#loanTermInYears").type("30").should("have.value","30")
    cy.contains("button","Calculate").click()

  })
});

describe("Log in as Admin", () => {
  it("should be able to click on 'Log in as Admin' in the nav bar, then sign in using the Admin credentials.", () => {
    cy.get('.dropdown-content').find("#adminloginlink").click({force: true})
    cy.location("pathname").should('eq', "/user/loginadmin")
    cy.get("#username").type("Admin").should("have.value","Admin")
    cy.get("#password").type("admin").should("have.value","admin")
    cy.get(".user-login-button").click()
  })
});

describe("Create Broker", () => {
  it("should be able to create a new broker while logged in as an admin", () => {
    signInAsAdmin()
    cy.contains("li","Brokers").click()
    cy.location("pathname").should('eq', "/brokerpage")
    cy.contains("a", "Add Broker").click()
    cy.location("pathname").should('eq',"/brokercreate")
    cy.get("#name").type("CypressBroker").should("have.value", "CypressBroker")
    cy.get("#email").type("CypressBroker@email.com").should("have.value", "CypressBroker@email.com")
    cy.get("#password").type("!Q2w3e4r").should("have.value", "!Q2w3e4r")
    cy.contains("button", "Submit").click()
  })
});

describe("login as broker", () => {
  it("should be able to log in as the broker that was just created", () => {
    cy.get('.dropdown-content').find("#brokerloginlink").click({force: true})
    cy.location("pathname").should('eq', "/user/loginbroker")
    cy.get("#username").type("CypressBroker").should("have.value", "CypressBroker")
    cy.get("#password").type("!Q2w3e4r").should("have.value", "!Q2w3e4r")
    cy.get(".user-login-button").click()
  })
});

describe("create property as broker", () => {
  it("should be able to create a new property after signing in as a broker", () => {
    signInAsBroker()
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
    cy.get("input[name='brokerEmail']").type("CypressBroker@email.com").should("have.value",
        "CypressBroker@email.com")
    cy.wait(1000)
    cy.get("button[name='submit']").click()
    cy.wait(1000)
  })
});

describe("update property as broker", () => {
  it("should be able to update the property we just created", () => {
    signInAsBroker()
    cy.contains("li", "Properties").click()
    cy.location("pathname").should('eq', "/property")
    cy.contains("span", "Cypress Test").as('span')
    cy.get("@span").click()
    cy.location("pathname").should("include", "/property/")
    cy.contains("a","Update Property" ).click()
    cy.location("pathname").should("include", "/update/")
    cy.get("input[name='title']").type("Cypress Test Updated").should("have.value",
        "Cypress Test Updated")
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
    cy.contains("button", "Submit").click()
  })
});

describe("delete property as broker", () => {
  it("should be able to delete the property we just updated", () => {
    signInAsBroker()
    cy.contains("li", "Properties").click()
    cy.location("pathname").should('eq', "/property")
    cy.contains("span", "Cypress Test Updated").click()
    cy.location("pathname").should("include", "/property/")
    cy.get("#deletebutton").click()
  })
});

describe("Delete Broker", () => {
  it("should be able to delete the broker that was created in the previous test", () => {
    signInAsAdmin()
    cy.contains("li","Brokers").click()
    cy.contains("a","View All Brokers").click()
    cy.contains("span","CypressBroker").contains("a", "Delete")
  })
});