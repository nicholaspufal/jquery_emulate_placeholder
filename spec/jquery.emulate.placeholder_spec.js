describe("jQuery Emulate Placeholder Plugin", function() {
  beforeEach(function() {
    var form = $("<form action='#'></form>");
    form.append("<label for='name'>Name</label>");
    form.append("<input type='text' id='name' data-placeholder='Input your name here' />");
    form.append("<label for='email'>E-mail</label>");
    form.append("<input type='text' id='email' data-placeholder='Input your email here' />");
    form.appendTo('body');

    $("form").emulatePlaceholder();
  });

  afterEach(function() {
    $("form").remove();
  });

  describe("form was submitted", function() {
    it("should clear the placeholder text, as it's not a valid value", function() {
      var input_name = $("form input#name");
      var input_email = $("form input#email");
      $("form").submit();
      expect(input_name.val()).toEqual("");
      expect(input_email.val()).toEqual("");
    });
  });

  describe("input has no focus", function() {
    it("should show the placeholder text", function() {
      var input_name = $("form input#name");
      var input_email = $("form input#email");

      expect(input_name.val()).toEqual("Input your name here");
      expect(input_email.val()).toEqual("Input your email here");
    });
  });

  describe("input has focus", function() {
    it("should show the value empty when nothing was typed yet", function() {
      var input_name = $("form input#name").focus();
      expect(input_name.val()).toEqual("");
    });
  });

  describe("input has the focus switched", function() {
    it("should show the value already typed there", function() {
      var input_name = $("form input#name")

      input_name.val("foo");
      input_name.blur();
      input_name.focus();

      expect(input_name.val()).toEqual("foo");
    });

    it("should return the placeholder when there was no text typed after loosing focus", function() {
      var input_name = $("form input#name");

      input_name.focus();
      input_name.blur();

      expect(input_name.val()).toEqual("Input your name here");
    });
  });
});
