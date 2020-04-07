import singin_page from './pageobject/sign-in';

describe('Test',function(){


    it('Sign Up Test - POM',function(){

        const singin_po = new singin_page();
        singin_po.visit('https://react-redux.realworld.io/');
        singin_po.setviewport('macbook-15');
        singin_po.signup();
        
    });
    
    it('New Post and Verify',function(){
        cy.get('.ion-compose').click();
        cy.get('input[placeholder="Article Title"]').type('DemoTest#1234');
        cy.get('#main > div fieldset:nth-child(2) > input').type(userID_Alpha());
        cy.get('#main > div fieldset:nth-child(3) > textarea').type('dasddasd');
        cy.get('button').contains('Publish Article').click();
        cy.get('.container h1').should('have.text','DemoTest#1234');

    });

    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }


});