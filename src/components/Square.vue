<template>
	<div class="square" :style="squareStyle"></div>
</template>

<script>
export default {
  name: 'Square',
	props: {
    square: {
      type: Object,
      required: true,
			default: () => {}
    }
  },
	computed: {
		squareStyle() {
			return {
				backgroundColor: `${this.square.backgroundColor}`,
				height: `${this.square.sideLength}px`,
				left: `${this.square.positionX}px`,
				top: `${this.square.positionY}px`,				
				width: `${this.square.sideLength}px`
			}
		}
  }
}
</script>

<style scoped lang="scss">
.square {
	position: absolute;
	z-index: 1;
}
</style>
