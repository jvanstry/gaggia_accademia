describe('Product Spec', function(){
  var $;
  beforeAll(function(){
    $ = window.jQuery;
  });

  describe("A suite is just a function", function() {
    var a;

    it("and so is a spec", function() {
      a = true;

      expect(a).toBe(true);
    });
  });

  describe('the page', function() {
    it('should work over to here', function(){
      expect(window.hello).toBe('jerry');
    })

    it('shouldnt have jquery on it', function(){
      expect($).toBeUndefined();
    })
  })
});

