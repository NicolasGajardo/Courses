(function(win, $) {
  function clone(src, out) {
    for(var attr in src.prototype){
      out.prototype[attr] = src.prototype[attr];
    }
  }

  function Circle(){
    this.item = $('<div class="circle"></div>');
  }
  
  Circle.prototype.color = function (clr) {
    this.item.css('background', clr);
  };
  
  Circle.prototype.move = function(left, top) {
    this.item.css('left', left);
    this.item.css('top', top);
  }
  
  Circle.prototype.get = function () {
    return this.item;
  };
  
  function Rectangle(){
    this.item = $('<div class="rect"></div>');
  }
  
  clone(Circle, Rectangle);

  function RedCircleBuilder() {
    this.item = new Circle();
    this.init();
  }
  
  RedCircleBuilder.prototype.init = function () {
    this.item.color("red");
  };
  
  RedCircleBuilder.prototype.get = function () {
    return this.item;
  };
  
  function BlueCircleBuilder() {
    this.item = new Circle();
    this.init();
  }
  
  BlueCircleBuilder.prototype.init = function () {
    this.item.color("blue");
    var rect = new Rectangle();
    rect.color("yellow");
    rect.move(40,40);
    
    this.item.get().append(rect.get());
  };
  
  BlueCircleBuilder.prototype.get = function () {
    return this.item;
  };
    
  var AbstractCircleFactory = function() {
    this.types= {};
    
    this.create = function(type) {
      return (new this.types[type]()).get();
    };
    
    this.register = function(type, cls){
      if(cls.prototype.init && cls.prototype.get){
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
        
        _acf.register('red', RedCircleBuilder);
        _acf.register('blue', BlueCircleBuilder);
        
      function _position(circle, left, top) {
        circle.move(left, top);
      }

      function create(left, top, type) {
        var circle = _acf.create(type);
        circle.move(left, top);
        return circle;
      }

      function add(circle) {
        _stage.append(circle.get());
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