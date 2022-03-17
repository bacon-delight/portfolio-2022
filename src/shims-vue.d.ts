/* eslint-disable */
declare module "*.vue" {
	import type { DefineComponent } from "vue";
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module "vue-ecosphere" {
	export default any;
}

declare module "scrollbooster" {
	export default any;
}

declare module "horizontal-scroll" {
	export default any;
}
