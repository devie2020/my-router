export default class Router {
	mode = null;
	routes = {};

	constructor(config) {
		const { mode, routes } = config;
		this.mode = mode;
		routes.forEach(config => {
			const { path, component } = config;
			this.route(path, () => {
				document.querySelector('#router-content').innerHTML = component;
			});
		});

		// 调用初始化方法
		this.init();
		this.bindLink();
	}

	// 初始化导航监听
	init() {
		window.addEventListener('load', () => {
			this.updateView();
		});

		window.addEventListener('hashchange', () => {
			this.updateView();
		});

		window.addEventListener('popstate', () => {
			this.updateView();
		});
	}

	bindLink() {
		if (this.mode === 'hash') return;
		const links = document.querySelectorAll('a');
		[...links].forEach(link => {
			link.addEventListener('click', () =>
				this.push(link.getAttribute('data-path')),
			);
		});
	}

	route(path, callback) {
		this.routes[path] = callback;
	}

	push(path) {
		if (this.mode === 'hash') return;
		window.history.pushState({}, null, path);
		this.updateView();
	}

	updateView() {
		let path = null;

		// hash
		if (this.mode === 'hash') {
			path = window.location.hash.slice(1) || '/';
		}

		// history
		if (this.mode === 'history') {
			console.log(window.location.pathname);
			path = window.location.pathname || '/';
		}

		// 执行路由对应的回调函数
		this.routes[path]();
	}
}
