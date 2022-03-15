<template lang="pug">
.work
	.work__information
		.work__header
			v-eco-header(:type="4", :label="$t('headers.showcase')")
		.work__description
			v-eco-paragraph(:label="$t('extras.drag_instruction')")

	.grid
		.card
			img.card__image(
				src="https://images.pexels.com/photos/5044497/pexels-photo-5044497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				alt=""
			)
			.card__description
				.card__header
					v-eco-header(:type="5", :label="$t('JustTransact')", :margin="false")
				.card__tags
					v-eco-tag(label="Vue", theme="invert")
					v-eco-tag(label="Vue", theme="invert")
					v-eco-tag(label="Vue", theme="invert")
					v-eco-tag(label="Vue", theme="invert")
					v-eco-tag(label="Vue", theme="invert")
					v-eco-tag(label="Vue", theme="invert")
					v-eco-tag(label="Vue", theme="invert")
					v-eco-tag(label="Vue", theme="invert")
					v-eco-tag(label="Vue", theme="invert")
					v-eco-tag(label="Vue", theme="invert")
					v-eco-tag(label="Vue", theme="invert")
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
		.block test
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ScrollBooster from "scrollbooster";

export default defineComponent({
	name: "Work",
	data() {
		return {
			grid: null as typeof ScrollBooster | null,
			cursor: {
				x: 0,
				y: 0,
			},
		};
	},
	mounted() {
		this.grid = new ScrollBooster({
			viewport: document.querySelector(".work"),
			content: document.querySelector(".grid"),
			scrollMode: "transform",
		});
		this.grid.setPosition({
			/* eslint-disable-next-line */
			x: (document.querySelector(".work") as any)?.clientHeight / 2,
			/* eslint-disable-next-line */
			y: (document.querySelector(".work") as any)?.clientWidth / 2,
		});
	},
});
</script>

<style lang="scss" scoped>
.work {
	height: 100vh;
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
	cursor: crosshair;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	column-gap: 8rem;
	row-gap: 8rem;
	animation: grid-animation 2s ease-in-out;
}

.card,
.block {
	background: $color-background;
	// height: 25rem;
	width: 20rem;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	filter: grayscale(100%);
	border-radius: 8px;

	&:hover {
		transform: scale(1.05);
		filter: grayscale(0%);
	}

	&__image {
		height: 20rem;
		width: 100%;
		object-fit: cover;
	}

	&__description {
		padding: 0 1rem 1rem;
	}

	&__header {
		text-align: center;
	}

	&__tags {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		column-gap: 0.5rem;
		row-gap: 0.5rem;
	}
}

@keyframes grid-animation {
	from {
		opacity: 0;
		transform: scale(0.9);
	}
}
</style>
