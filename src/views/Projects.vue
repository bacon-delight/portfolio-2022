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
import gsap from "gsap";

// Docs: https://alvarotrigo.com/blog/scroll-horizontally-with-mouse-wheel-vanilla-java/
export default defineComponent({
	name: "Projects",
	computed: {
		...mapGetters({
			projects: "projects",
		}),
	},
	data() {
		return {
			container: null,
			position: 0,
			gsap,
		};
	},
	mounted() {
		this.container = document.querySelector(".projects__list");
		this.container.addEventListener("wheel", this.handleScroll);
		this.distort();
	},
	methods: {
		/* eslint-disable-next-line */
		handleScroll(event: any): void {
			this.container.scrollLeft += event.deltaY / 4;
		},
		distort() {
			const newPosition = this.container.scrollLeft;
			const difference = newPosition - this.position;
			const speed = difference * 0.08;
			this.gsap.to(this.container, {
				skewY: speed / 1.5,
				// rotateY: speed * 2,
				duration: 1,
			});
			this.position = newPosition;
			requestAnimationFrame(this.distort);
		},
	},
	onUnmounted() {
		document
			.querySelector(".projects__list")
			?.removeEventListener("wheel", this.handleScroll);
	},
});
</script>

<style lang="scss" scoped>
.projects {
	height: 100%;
	overflow: hidden;

	&__list {
		display: flex;
		column-gap: 20rem;
		height: 100%;
		align-items: center;
		padding: 0 2rem;
		overflow-x: auto;

		&::-webkit-scrollbar {
			display: none;
		}
		-ms-overflow-style: none;
		scrollbar-width: none;
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
