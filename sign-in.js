class signin{

    visit(url){
        cy.visit(url);
    } 
    
    setviewport(viewport){
        //macbook-15
        cy.viewport(viewport);
    }
    
    signup(username,password){
        cy.get('a').contains('Sign up').click();
        cy.get('input[placeholder="Username"]').type(userID_Alpha());
        cy.get('input[placeholder="Email"]').type(userID_Alpha()+'@gmail.com');
        cy.get('input[placeholder="Password"]').type(userID_Alpha()+'343234232');
        cy.get('button').contains('Sign in').click();
        cy.get('a').contains('Home').should('have.text','Home');
        cy.wait(2000);
    }

    
}

function userID_Alpha() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export default signin;