(function ($) {
    
/*========================================*/
/*=     CONFIG VARIABLES                 =*/
/*========================================*/
    
    var load_from_file = false; //want to create from external file?
    var file_path = ''; //file route
    var markers = false; //markers?
    var markers_tooltip = false; //tooltips for markers?
    var zoom = []; //zoom? (['min', 'max'])
    var navigation = false; //navigation?
    var thumbnails = false; //navigation with thumbnails?
    var timeout = 3000; //time between animations miliseconds
    var touchable = false; //mobile support?
    
/*========================================*/
/*=     FUNCTIONALITY VARIABLES          =*/
/*========================================*/
    
    var current = false; //DOM item currently being shown
    var navigation = false; //DOM item holding navigation
    var next = false; //DOM item
    var prev = false; //DOM item
    
    var methods = {
        
        init: function (options) {
            
            
        },
        
        next: function () {
          
            
        },
        
        prev: function () {
            
            
        },
        
        goTo: function (index) {
            
            
        },
        
        _getFile: function (path) {
            
            
        },
        
        _parseXML: function (xml) {
            
            
        },
        
        _parseJSON: function (json) {
            
            
        },
        
        _buildSlider: function (images) {
            
            
        },
        
        _createNavigation: function () {
            
            
        }
    };
    
    $.fn.markslider = function (options) {
        
        if (typeof options === 'object' || !options) return methods.init.apply(this, options);
        
        $.error('Arguments passed must be formatted as a JSON object');
    }
})( jQuery );