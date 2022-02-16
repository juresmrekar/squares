import { calculateSideLength, randomColor } from "../../src/helpers/Squares.helper";

describe('Squares.helper.js', () => {
	describe('calculateSideLength method', () => {
		it('should return viewportWidth if viewportWidth < viewportHeight', () => {
			const viewportWidth = 100;
			const viewportHeight = 200;
			const sideLength = calculateSideLength({ viewportWidth, viewportHeight });
			expect(sideLength).toBe(viewportWidth);
		})

		it('should return viewportHeight if viewportWidth > viewportHeight', () => {
			const viewportWidth = 300;
			const viewportHeight = 200;
			const sideLength = calculateSideLength({ viewportWidth, viewportHeight });
			expect(sideLength).toBe(viewportHeight);
		})

		it('should return viewportHeight if viewportWidth = viewportHeight', () => {
			const viewportWidth = 200;
			const viewportHeight = 200;
			const sideLength = calculateSideLength({ viewportWidth, viewportHeight });
			expect(sideLength).toBe(viewportHeight);
		})

		it('should return 0 if viewportWidth parameter is missing', () => {
			const viewportHeight = 200;
			const sideLength = calculateSideLength({ viewportHeight }) ;
			expect(sideLength).toBe(0);
		})

		it('should return 0 if viewportHeight parameter is missing', () => {
			const viewportWidth = 200;
			const sideLength = calculateSideLength({ viewportWidth }) ;
			expect(sideLength).toBe(0);
		})
	})

	describe('randomColor method', () => {
		it('should return string', () => {
			const calculatedRandomColor = randomColor();
			expect(typeof calculatedRandomColor).toBe('string');
		})

		it('should contain # in returned string', () => {
			const calculatedRandomColor = randomColor();
			expect(calculatedRandomColor).toContain('#');
		})

		it('should return string which length is 7 (#FF0000)', () => {
			const calculatedRandomColor = randomColor();
			expect(calculatedRandomColor.length).toBe(7);
		})
	})
})