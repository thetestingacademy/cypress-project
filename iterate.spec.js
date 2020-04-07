  describe('Dynamic Testdata',function(){
    ['https://google.com','https://bing.com','https://duckduckgo.com'].forEach(function(a){
        it('Opening'+a,function(){
            cy.visit(a);
        });
    })
});