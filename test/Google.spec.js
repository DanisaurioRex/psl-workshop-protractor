describe('When open Google Page', () => {
    beforeEach(() => {
        browser.get('http://www.google.com');
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toEqual('Google');
    });
});