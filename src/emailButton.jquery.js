(function($){

  var button = null;

  var config = {
    authenticated: false
  };

  var methods = {
    init: function(opts) {
      $.extend(config, opts);

      button.click(function(){
        alert('Gotta authenticate first');
      });

      return button;
    }
  };

  $.fn.emailButton = function( method ) {

    button = this;

    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.emailButton' );
    }
  };

})(jQuery);
