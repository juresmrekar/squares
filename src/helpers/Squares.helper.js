export const calculateSideLength = ({ viewportWidth, viewportHeight }) => {
	if (!viewportWidth || !viewportHeight) {
		return 0;
	}
	return viewportWidth < viewportHeight ? viewportWidth : viewportHeight;
}

export const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;
