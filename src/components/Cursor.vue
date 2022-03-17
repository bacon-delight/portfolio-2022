<template lang="pug">
.cursor
.cursor-follower
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TweenMax from "gsap";

export default defineComponent({
	data() {
		return {
			posX: 0,
			posY: 0,
			mouseX: 0,
			mouseY: 0,
			cursor: null,
			cursorFollower: null,
			targets: null,
		};
	},
	mounted() {
		this.$ecosphere.theme.setTheme("dark");
		this.$ecosphere.theme.setColors(
			{
				"--color-background-faded": "#e5e5e5",
			},
			{
				"--color-contrast-faded": "#e5e5e5",
			}
		);

		this.cursor = document.querySelector(".cursor");
		this.cursorFollower = document.querySelector(".cursor-follower");
		this.setupCursor();
	},
	methods: {
		async setupCursor() {
			this.targets = await document.getElementsByClassName(
				"cursor-target"
			);
			TweenMax.to({}, 0.016, {
				repeat: -1,
				onRepeat: () => {
					this.posX += (this.mouseX - this.posX) / 9;
					this.posY += (this.mouseY - this.posY) / 9;
					TweenMax.set(this.cursorFollower, {
						css: {
							left: this.posX - 20,
							top: this.posY - 20,
						},
					});
					TweenMax.set(this.cursor, {
						css: {
							left: this.mouseX,
							top: this.mouseY,
						},
					});
				},
			});
			document.onmousemove = (event) => {
				this.mouseX = event.clientX;
				this.mouseY = event.clientY;
			};
			for (let i = 0; i < this.targets.length; i++) {
				this.targets[i].onmouseenter = () => {
					this.cursor.classList.add("active");
					this.cursorFollower.classList.add("active");
				};
				this.targets[i].onmouseleave = () => {
					this.cursor.classList.remove("active");
					this.cursorFollower.classList.remove("active");
				};
			}
		},
	},
	watch: {
		$route() {
			this.setupCursor();
		},
	},
});
</script>

<style lang="scss" scoped>
.cursor {
	position: absolute;
	background: $color-contrast;
	width: 8px;
	height: 8px;
	border-radius: 100%;
	z-index: 1;
	transition: 0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
		0.2s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
	user-select: none;
	pointer-events: none;
	transform: scale(0.8);
}

.cursor::before {
	content: "";
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	// background-image: url("/img/projects/Collatz.png");
	// background-position: center;
	// background-repeat: no-repeat;
	// background-size: cover;
	background: $color-contrast;
	border-radius: 100%;
	opacity: 0;
}

.cursor.active {
	opacity: 1;
	transform: scale(12);
}

.cursor.active::before {
	opacity: 1;
}

.cursor-follower {
	position: absolute;
	background: $color-contrast;
	opacity: 0.2;
	width: 40px;
	height: 40px;
	border-radius: 100%;
	z-index: 1;
	transition: 0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
		0.4s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
	user-select: none;
	pointer-events: none;
	transform: translate(4px, 4px);
}

.cursor-follower.active {
	opacity: 0.3;
	transform: scale(0);
}
</style>
