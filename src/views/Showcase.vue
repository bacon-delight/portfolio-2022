<template lang="pug">
.showcase
	.showcase__information
		v-eco-paragraph(:label="$t('extras.drag_instruction')", type="code")

	.grid
		.card(v-for="project in projects")
			img.card__image(:src="project.image", alt="")
			.card__header
				v-eco-header(:type="6", :label="project.label", :margin="false")
			.card__hover
				.card__hover-backdrop
				.card__hover-circle
				.card__hover-text
					.card__hover-text--item(v-for="n in 5")
						v-eco-icon(v-if="n !== 0", type="ri-checkbox-blank-circle-fill")
						span {{ project.label }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import ScrollBooster from "scrollbooster";

export default defineComponent({
	name: "Showcase",
	data() {
		return {
			grid: null as typeof ScrollBooster | null,
			cursor: {
				x: 0,
				y: 0,
			},
		};
	},
	computed: {
		...mapGetters({
			projects: "projects",
		}),
	},
	mounted() {
		this.grid = new ScrollBooster({
			viewport: document.querySelector(".showcase"),
			content: document.querySelector(".grid"),
			scrollMode: "transform",
		});
		this.grid.setPosition({
			x: 150,
			y: 130,
			/* eslint-disable-next-line */
			// x: (document.querySelector(".showcase") as any)?.clientHeight / 2,
			/* eslint-disable-next-line */
			// y: (document.querySelector(".showcase") as any)?.clientWidth / 2,
		});
	},
});
</script>

<style lang="scss" scoped>
.showcase {
	height: 100%;
	width: 100vw;
	overflow: hidden;
	position: relative;

	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;

	&__information {
		// z-index: 1;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
}

.grid {
	width: fit-content;
	padding: 5rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 8rem;
	row-gap: 8rem;
	animation: grid-animation 2s ease-in-out;
}

.card {
	height: 25rem;
	width: 20rem;
	filter: grayscale(85%);
	position: relative;
	transition: all 0.3s ease-in-out;
	background: $color-background;

	&__image {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	&__header {
		position: absolute;
		top: 90%;
		left: 10%;
		transform: translate(0%, -50%);
		text-align: center;
		background: $color-background;
		padding: 0.5rem 1rem;
		transition: all 0.3s ease-in-out;
	}

	&__hover {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	&:hover {
		transform: scale(1.05);
		filter: grayscale(0%);

		.card__hover-circle {
			transform: translate(-50%, -50%) scale(1);
		}

		.card__hover-text,
		.card__hover-backdrop {
			opacity: 1;
		}

		.card__header {
			opacity: 0;
		}
	}

	&__hover-backdrop {
		position: absolute;
		background: $color-contrast;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		opacity: 0;
		transition: all 0.3s ease-in-out;
	}

	&__hover-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		white-space: nowrap;
		opacity: 0;
		transition: all 0.3s ease-in-out;
		animation: float-left 10s linear infinite;
		animation-delay: 0.3s;
		display: flex;
		column-gap: 1rem;
		font-size: 2rem;

		&--item {
			display: flex;
			column-gap: 1rem;
			align-items: center;
		}
	}

	&__hover-circle {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0);
		width: 15rem;
		height: 15rem;
		border-radius: 100%;
		background: $color-background;
		transition: all 0.3s ease-in-out;
	}
}

@keyframes grid-animation {
	from {
		opacity: 0;
		transform: scale(0.9);
	}
}
</style>
