//obj  要拖动的元素对象
//title  拖动手柄  string selector

//new Drag(div, "h4");

function Drag(obj, title) {
	this.obj = obj;
	this.title = title ? obj.querySelector(title) : obj;
	//拖拽的最大left和top
	this.maxLeft = tools.getBody().width - this.obj.offsetWidth;
	this.maxTop = tools.getBody().height - this.obj.offsetHeight;
	
	this.init();
}

Drag.prototype = {
	constructor: Drag,
	init: function(){
		var _this = this;
		this.title.onmousedown = function(e){
			e = e || window.event;
			var disX = e.offsetX,
				disY = e.offsetY;
			document.onmousemove = function(e){
				e = e || window.event;
				var left = e.clientX - disX,
					top = e.clientY - disY;
				_this.move(left, top);	
			}
			//取消move的绑定
			document.onmouseup = function(){
				document.onmousemove = null;
			}
			e.preventDefault();
		}
	},
	
	move: function(_left, _top){
		//先判断
		if(_left < 0) _left = 0;
		if(_top < 0) _top = 0;
		if(_left > this.maxLeft) _left = this.maxLeft;
		if(_top > this.maxTop) _top = this.maxTop;
		
		tools.css(this.obj, {left: _left+"px", top : _top+"px"});
		
	}
}