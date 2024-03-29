describe('forgotPassword' , () => {
    it('Doit afficher un message de motde passe incorrects', () => {
     let forgetPassword = ['oumaima123' , 'ouma221' , '123456'];
    
     forgetPassword.forEach(password => {
    
    
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
        cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').contains('Forgotten Password').click()
        
    
        })
    })
})
