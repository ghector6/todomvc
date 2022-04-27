describe("React TodoMVC", () =>{
    beforeEach(()=>{
        cy.visit("http://localhost:8888")
    })


    it("adds a single todo", () => {
        
        cy.get(".new-todo").type("Buy Milk{enter}").type("Learn Cypress{enter}")
        
        cy.get(".todo-list li").should("have.length", 2)
    })
    it("add three todos", () => {

        cy.get(".new-todo").type("Buy Milk{enter} ")
        cy.get(".new-todo").type("Practice JavaScript{enter} ")
        cy.get(".new-todo").type("Get files done{enter} ")

    })


})