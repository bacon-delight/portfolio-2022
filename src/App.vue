<template lang="pug">
v-eco-wrapper.wrapper
	Menu
	router-view
	Cursor
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cursor from "@/components/Cursor.vue";
import Menu from "@/components/Menu.vue";

export default defineComponent({
	components: {
		Cursor,
		Menu,
	},
});
</script>

<style lang="scss">
#app {
	display: block;
	cursor: none;
	user-select: none;
}

.wrapper {
	height: 100vh !important;
	width: 100vw !important;
	overflow: auto;
	position: relative;
	// display: grid;
	// grid-template-rows: min-content 1fr;
}
</style>
