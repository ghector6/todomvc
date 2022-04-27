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
    it("add three todos", () => {

        cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`)
        cy.get(".new-todo").type(`${TODO_ITEM_TWO}{enter}`)
        cy.get(".new-todo").type(`${TODO_ITEM_THREE}{enter}`)

    })


})