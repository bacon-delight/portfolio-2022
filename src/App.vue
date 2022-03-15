<template>
	<v-eco-wrapper class="wrapper">
		<router-view />
	</v-eco-wrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	mounted() {
		this.$ecosphere.theme.setTheme("dark");
	},
});
</script>

<style lang="scss">
#app {
	display: block;
}

.wrapper {
	height: 100vh !important;
	width: 100vw !important;
	overflow: auto;
}
</style>
