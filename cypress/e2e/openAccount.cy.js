describe('template spec', () => {
    let Fname
    let Lname
    let Email
    let Telephone
    let Pwd
    let ConfPwd
    let subscribe
    let search
    
    before(() => {
       Fname='oumaima'
       Lname='ghanmi'
       Email='oumaimaghanmi02@gmail.com'
       Telephone='99718860'
       Pwd='oumaima123'
       ConfPwd='oumaima123'
       subscribe='yes'
       
       search='cameras'
    
       
       
    })
    
    /**beforeEach(() =>{
       cy.visit('https://ecommerce-playground.lambdatest.io/')
       cy.get('img[alt="Poco Electro"]').should('be.visible')
       cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains('My account').click({force: true})
       cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').contains('Login').click({force: true})
      
    })*///

    it('create', ()=> {
      
       cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains('My account').click({force: true})
       cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').contains('Register').click({force: true})
       cy.get('input[placeholder="First Name"]').type(Fname)
       cy.get('input[placeholder="Last Name"]').type(Lname)
       cy.get('input[placeholder="E-Mail"]').type(Email)
       cy.get('input[placeholder="Telephone"]').type(Telephone)
       cy.get('input[placeholder="Password"]').type(Pwd)
       cy.get('input[placeholder="Password Confirm"]').type(ConfPwd)
       cy.get('label[for="input-newsletter-yes"]').click()
       cy.get('label[for="input-agree"]').click()
       cy.get('input[type="submit"]').click()

    })
    it('login', () => {

        cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains('My account').click({force: true})
        cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').contains('Login').click({force: true})
        cy.get('input[name="email"]').type(Email)
        cy.get('input[name="password"]').type(Pwd)
        cy.get('input[type="submit"]').click()

    })
    it('search', () => {

        cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type(search)
        cy.get('.type-text').click()
        cy.get('input[type="button"]').click()
      
 
      
      
   })
})