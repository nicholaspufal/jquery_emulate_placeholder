/*
* jQuery Emulate Placeholder Plugin
* ---
* Copyright 2011, Nicholas Pufal (http://about.me/nicholaspufal)
* Released under the MIT license.
*/

(function($) {
  $.fn.emulatePlaceholder = function() {
    return this.each(function() {

      $(this).submit(function() {
        $("input[data-placeholder]").each(function() {
          $(this).val() === $(this).attr("data-placeholder") && $(this).val("");
        });
      });

      $("input[data-placeholder]", $(this)).each(function() {
        $(this).val() === "" && $(this).val($(this).attr("data-placeholder"));

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
