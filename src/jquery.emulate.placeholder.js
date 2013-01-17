/*
* jQuery Emulate Placeholder Plugin
* ---
* Copyright 2011, Nicholas Pufal (http://about.me/nicholaspufal)
* Released under the MIT license.
*/

(function($) {
  $.fn.emulatePlaceholder = function() {
    return this.each(function() {

      //Prevent form from considerating the placeholder as a valid value
      $(this).submit(function() {
        $("input[data-placeholder]").each(function() {
          $(this).val() == $(this).attr("data-placeholder") && $(this).val("")
        });
      });

      $("input[data-placeholder]", $(this)).each(function() {
        //Set data-placeholder as the default value
        $(this).val() === "" && $(this).val($(this).attr("data-placeholder"));

        //Emulate placeholder focus/blur behavior
        $(this)
          .focus(function() {
            $(this).val() === $(this).attr("data-placeholder") && $(this).val("");
          })
          .blur(function() {
            $(this).val() === "" && $(this).val($(this).attr("data-placeholder"));
          });
      });
    });
  }
})(jQuery);
