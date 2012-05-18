describe("When a user is authenticted", function() {

  describe("and the email button is clicked", function() {

    it("the user should be prompted with an erroring alert message", function() {
      button = $("<button/>").emailButton();

      alertCalled = false
      spyOn(window, 'alert').andCallFake(function(){ alertCalled = true });

      button.click();

      expect(button.get(0)).toBeDefined();
      expect(alertCalled).toBe(true)
    });

  });

});
