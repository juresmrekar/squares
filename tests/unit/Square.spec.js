import { shallowMount } from '@vue/test-utils'
import Square from '@/components/Square.vue'

describe('Square.vue', () => {
	it('should render element with class square', () => {
		const square = {
			backgroundColor: '#FF0000',
			positionX: 0,
			positionY: 0,
			sideLength: 100
		};

		const wrapper = shallowMount(Square, {
      props: { square }
    });

		expect(wrapper.find('.square').exists()).toBe(true);
	})

	it('square element should have the correct style attributes', () => {
		const square = {
			backgroundColor: '#FF0000',
			positionX: 0,
			positionY: 0,
			sideLength: 100
		};

		const expectedSquareStyles = {
			height: '100px',
			left: '0px',
			top: '0px',
			width: '100px'
		};

		const wrapper = shallowMount(Square, {
      props: { square }
    });

		const elementStyle = wrapper.find('.square').element.style;
		const squareStyle = {
			height: elementStyle.getPropertyValue('height'),
			left: elementStyle.getPropertyValue('left'),
			top: elementStyle.getPropertyValue('top'),
			width: elementStyle.getPropertyValue('width')
		}

		expect(squareStyle).toEqual(expectedSquareStyles);
	})
})