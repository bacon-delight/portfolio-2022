<template lang="pug">
//- .menu__toggle
//- 	v-eco-button(label="Menu", :outline="false")
.menu
	v-eco-navbar.menu__navbar(brand="", :options="navigation()")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navigation from "@/navigation";

export default defineComponent({
	name: "Menu",
	data() {
		return {
			navigation,
		};
	},
});
</script>

<style lang="scss" scoped>
.menu {
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100;

	&__navbar {
		background: transparent !important;
		border: 0 !important;
	}
}
</style>
