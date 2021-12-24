import './src/styles/app.css';
import { Router } from './src/lib/router';

// document.querySelector('#app').innerHTML = `
// 	<div class="route-box">
// 		<a href="#/">Home</a>
// 		<a href="#/book">Book</a>
// 		<a href="#/movie">Movie</a>
// 	</div>
// `;

document.querySelector('#app').innerHTML = `
	<div class="router-nav">
		<a data-path="/">Home</a>
		<a data-path="/book">Book</a>
		<a data-path="/movie">Movie</a>
	</div>
	<div class="router-content" id="router-content"></div>
`;

const routeConfig = {
	mode: 'history',
	routes: [
		{
			path: '/',
			component: '这里是home页面',
		},
		{
			path: '/book',
			component: '这里是book页面',
		},
		{
			path: '/movie',
			component: '这里是movie页面',
		},
	],
};

new Router(routeConfig);
