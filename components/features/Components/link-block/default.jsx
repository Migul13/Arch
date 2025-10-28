import { Carousel, Image } from "@wpmedia/arc-themes-components";

const Feature = () => (
	<Carousel id="carousel-1" label="Images of x, y and z">
		<Carousel.Item label="Slide 1 of 2">
			<Image src="/camera.jpeg" alt="A camera with photos in front of it" />
		</Carousel.Item>
		<Carousel.Item label="Slide 2 of 2">
			<Image src="/canyon.jpeg" alt="Landscape view of a canyon" />
		</Carousel.Item>
	</Carousel>
);
export default Feature;