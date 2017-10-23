(function(win, $) {
  function RedCircle() {
  }
  
  RedCircle.prototype.create = function () {
      this.item = $('<div class="circle"></div>');
      return this;
  };
  
  function BlueCircle() {
  }
  
  BlueCircle.prototype.create = function () {
      this.item = $('<div class="circle" style="background:blue"></div>');
      return this;
  };
    
  var AbstractCircleFactory = function() {
    this.types= {};
    
    this.create = function(type) {
      return (new this.types[type]()).create();
    };
    
    this.register = function(type, cls){
      if(cls.prototype.create){
        this.types[type] = cls;
      }
    };
  };

  var CircleGeneratorSingleton = (function() {
    var instance;

    function init() {
      var _aCircle = [],
        _stage = $('.advert'),
        _acf = new AbstractCircleFactory();
        
        _acf.register('red', RedCircle);
        _acf.register('blue', BlueCircle);
        
      function _position(circle, left, top) {
        circle.css('left', left);
        circle.css('top', top);
      }

      function create(left, top, type) {
        var circle = _acf.create(type).item;
        _position(circle, left, top);

        return circle;
      }

      function add(circle) {
        _stage.append(circle);
        _aCircle.push(circle);
      }

      function index() {
        return _aCircle.length;
      }

      return {
        index: index,
        create: create,
        add: add
      };
    }

    return {
      getInstance: function() {
        if (!instance) {
          instance = init();
        }
        return instance;
      }
    };
  }());

  $(win.document).ready(function() {
    $('.advert').click(function(e) {
      var cg = CircleGeneratorSingleton.getInstance();
      var circle = cg.create(e.pageX - 25, e.pageY - 25, 'red');
      cg.add(circle);
    });

    $(document).keypress(function(e) {
      var cg;
      var circle;

      if (e.key === 'a') {
        cg = CircleGeneratorSingleton.getInstance();
        circle = cg.create(Math.floor(Math.random() * 600),
          Math.floor(Math.random() * 600), 'blue');
        cg.add(circle);
      } else if (e.key === 'i') {
        cg = CircleGeneratorSingleton.getInstance();

        console.log(cg.index());
      }
    });
  });
}(window, jQuery));