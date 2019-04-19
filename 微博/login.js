class Login {
	constructor(btn) {
		// 找到点击弹框按钮
		// 传参或者直接查找根据实际情况决定
	    this.btn = document.querySelector(btn);
		this.container = document.querySelector("#container");
		this.bindEvents();
	}
	
	/* bindEvents () {
		// 给登录弹框按钮绑定事件
		this.btn.onclick = this.btnClick.bind(this);
	}
	btnClick () {
		console.log(this);
	} */
	
	bindEvents () {
		// 给登录弹框按钮绑定事件
		/* this.btn.onclick = () => {
			console.log(this);
		} */
		let _this = this;
		this.btn.onclick = function () {
			console.log(_this);
			// 给container插入内容
			_this.container.innerHTML = '<h4>发布信息</h4>'+
			'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
			'<p><label><input id="username" type="text"></label></p>'+
			'<p><button id="loginBtn" class="logonBtn" type="button">发布</button></p>';
			// 让container显示并且居中
			tools.showCenter(_this.container);
			// 创建模态层
			_this.modal = document.createElement("div");
			_this.modal.className = "modal";
			document.body.appendChild(_this.modal);
			
			// container可拖拽
			// var h4 = _this.container.querySelector("h4");
			new Drag(_this.container, "h4").init();
			
			
		}
		
		// 给删除按钮绑事件（委托给container）
		this.container.onclick = function (e) {
			e = e || window.event;
			var target = e.target || e.srcElement;
			
			switch(target.id) {
				case "loginBtn":
					let username = document.querySelector("#username").value;
					// --- 发送后端进行登录 ----
					console.log(username);
				case "closeBtn" :
					_this.container.style.display = "none";
					document.body.removeChild(_this.modal);
			}	
		}
	}
}
