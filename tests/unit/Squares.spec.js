import { shallowMount } from '@vue/test-utils';
import Squares from '@/components/Squares.vue';

describe('Squares.vue', () => {
	describe('methods', () => {
		it('startCalculatingSquares method shoud be called when component is mounted', () => {
			const startCalculatingSquaresSpy = jest.spyOn(Squares.methods, 'startCalculatingSquares');
			const wrapper = shallowMount(Squares);

			expect(startCalculatingSquaresSpy).toHaveBeenCalled();
			startCalculatingSquaresSpy.mockRestore();
		})

		it('calculateSquare method shoud be called when component is mounted', () => {
			const calculateSquareSpy = jest.spyOn(Squares.methods, 'calculateSquare');
			shallowMount(Squares);

			expect(calculateSquareSpy).toHaveBeenCalled();
			calculateSquareSpy.mockRestore();
		})
	})

	describe('UI', () => {
		it('number of squares in DOM should equal number of squares in data collection', () => {
			const squares = [{
				backgroundColor: '#FF0000',
				positionX: 0,
				positionY: 0,
				sideLength: 100
			},
			{
				backgroundColor: '#333333',
				positionX: 100,
				positionY: 0,
				sideLength: 20
			},
			{
				backgroundColor: '#363636',
				positionX: 100,
				positionY: 20,
				sideLength: 20
			}]
			const expectedSquaresCollectionLength = squares.length;

			const wrapper = shallowMount(Squares, {
					data() {
						return {
							squares
						}
					}
				});

			expect(wrapper.find('.squares').element.childElementCount).toBe(expectedSquaresCollectionLength);
		})
	})
})
