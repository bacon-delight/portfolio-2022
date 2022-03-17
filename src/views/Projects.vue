<template lang="pug">
.projects
	//- .projects__header(@click="$router.push('showcase')")
	//- 	v-eco-header(:label="$t('headers.projects')", :type="3", :margin="false")
	.projects__list
		.project(v-for="project in projects")
			img.project__image.cursor-target(:src="project.image", alt="")
			.project__header
				v-eco-header(:label="project.label", :type="3", :margin="false")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
	name: "Projects",
	computed: {
		...mapGetters({
			projects: "projects",
		}),
	},
});
</script>

<style lang="scss" scoped>
.projects {
	height: 100%;

	&__list {
		display: flex;
		column-gap: 20rem;
		height: 100%;
		align-items: center;
		padding: 0 2rem;
		overflow-x: auto;
	}
}

.project {
	position: relative;

	&__image {
		height: 60vh;
		filter: grayscale(85%);
		transition: all 0.3s ease-in-out;

		&:hover {
			filter: grayscale(0%);
		}
	}

	&__header {
		position: absolute;
		top: 90%;
		left: 10%;
		transform: translate(0%, -50%);
		white-space: nowrap;
		background: $color-background;
		padding: 0 1rem;
	}
}
</style>
