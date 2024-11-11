import { createSSRApp } from "vue";
import App from "./App.vue";
import store from './store';
import uviewPlus from '@/uni_modules/uview-plus'


export function createApp() {
	const app = createSSRApp(App);
	app.use(store);
	app.use(uviewPlus)
	return {
		app,
	};
}
