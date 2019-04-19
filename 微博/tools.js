var tools={
	getStyle : function (obj, attr) {
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
	},
		/* 让元素在窗口范围绝对居中
		 * obj  <DOM Object> 要居中的那个元素
		 */
		showCenter : function (obj) {
			// 显示
			// this.setStyle(obj, {display: "block"});
			obj.style.display = "block";
			// 加上绝对定位
			// 计算坐标
			let _this = this;
			function center () {
				var _top = (_this.getBody().height - obj.offsetHeight) / 2;
				var _left = (_this.getBody().width - obj.offsetWidth) / 2;
				console.log(obj.offsetHeight, obj.offsetWidth);
				_this.setStyle(obj, {
					position :"absolute",
					left : _left + "px",
					top : _top + "px"
				});
			};
			center();
			// 窗口大小发生改变的时候重新计算坐标
			window.onresize = center;
		}
}