describe("React TodoMVC", () =>{

    const TODO_ITEM_ONE = 'Buy Milk'

    const TODO_ITEM_TWO = 'Practice JavaScript'

    const TODO_ITEM_THREE = 'Get Files Done'

    

    beforeEach(()=>{
        cy.visit("http://localhost:8888")
    })

    it("adds a single todo", () => {
        
        cy.get(".new-todo").type("Buy Milk{enter}").type("Learn Cypress{enter}")
        
        cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE)
    })

    it.only("add three todos", () => {

        cy.createDefaultTodos()

        cy.get(".todo-list li").should("have.length", 3)

    })
    
    it("should append new items to the bottom of the list", () => {

        cy.createDefaultTodos()

        cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE)

        cy.get(".todo-list li").eq(1).find("label").should("contain", TODO_ITEM_TWO)

        cy.get(".todo-list li").eq(2).find("label").should("contain", TODO_ITEM_THREE)
        
        cy.get(".todo-count").contains("3 items left")


    })
})