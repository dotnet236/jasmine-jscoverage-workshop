(function($){

  var plugin = null;

  var config = { };

  var methods = {
    init: function(opts) {
      $.extend(config, opts);

      return plugin;
    }
  };

  $.fn.plugin = function( method ) {

    plugin = this;

    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on plugin' );
    }
  };

})(jQuery);
