<template>
  <div class="container">
		<div class="squares">
			<square v-for="(square, index) in squares"
					:key="index"
					:square="square"
			>
			</square>			
		</div>
		<div class="info">
			Number of squares: {{ squares.length }} <br>
			Remaining viewport width: {{ remainingViewportWidth }} <br>
			Remaining viewport height: {{ remainingViewportHeight }}
		</div>
  </div>
</template>

<script>
import Square from './Square.vue'
import { calculateSideLength, randomColor } from '../helpers/Squares.helper'

export default {
  name: 'Squares',
	components: {
    Square
  },
	data: () => ({
		// squares collection
		squares: [],
		// viewport data
		remainingViewportWidth: 0,
    remainingViewportHeight: 0,
		remainingViewportPositionX: 0,
		remainingViewportPositionY: 0
  }),
  mounted() {
		// add resize eventListener in mounted hook
    window.addEventListener('resize', this.startCalculatingSquares);
		this.startCalculatingSquares();
  },
  unmounted() {
		// remove resize eventListener in unmounted hook
    window.removeEventListener('resize', this.startCalculatingSquares);
  },
  methods: {
		startCalculatingSquares() {
			this.resetData();
			this.calculateSquare();
		},
		calculateSquare() {
			// return if width or height of remaining viewport is 0
			if (this.remainingViewportWidth === 0 || this.remainingViewportHeight === 0) {
				return;
			}

			// add square to squares collection 
			this.addSquare();

			// calculate and set remaining viewport after square is added to collection
			this.setRemainingViewport();

			// call calculateSquare() to try adding another square to collection
			this.calculateSquare();
		},
		addSquare() {
			// calculate side length of a square
			const sideLength = calculateSideLength({ viewportWidth: this.remainingViewportWidth, viewportHeight: this.remainingViewportHeight });

			this.squares.push({
				backgroundColor: randomColor(),
				positionX: this.remainingViewportPositionX,
				positionY: this.remainingViewportPositionY,
				sideLength
			});
		},
		setInitialViewport() {
			// set initial viewport width, height and position
      this.remainingViewportWidth = document.documentElement.clientWidth;
      this.remainingViewportHeight = document.documentElement.clientHeight;
			this.remainingViewportPositionX = 0;
			this.remainingViewportPositionY = 0;
    },
		setRemainingViewport() {
			// calculate and set remaining viewport height, width and position
			if (this.remainingViewportWidth < this.remainingViewportHeight) {
				this.remainingViewportHeight = this.remainingViewportHeight - this.remainingViewportWidth;
				this.remainingViewportPositionY = this.remainingViewportPositionY + this.remainingViewportWidth;
			} else {
				this.remainingViewportWidth = this.remainingViewportWidth - this.remainingViewportHeight;
				this.remainingViewportPositionX = this.remainingViewportPositionX + this.remainingViewportHeight;
			}
		},
		resetData() {
			this.squares = [];
			this.setInitialViewport();
		}
  }
}
</script>

<style scoped lang="scss">
.container, .squares {
	height: 100%;
	left: 0;
	position: absolute;
	width: 100%;
	top: 0;
}

.info {
	background: rgba(0, 0, 0, .70);
	color: #FFFFFF;
	font-size: 16px;
	left: 0;
	padding: 20px;
	position: absolute;
	top: 0;
	z-index: 2;
}
</style>
