import { useState } from 'react';
import image from '/Users/rajendraacharya/Desktop/E-commerce/E_commerce/src/assets/Bike.png';

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            imageUrl: image,
            title: 'Selling Best Bike\'s parts',
            buttonText: 'Explore'
        },
        {
            imageUrl: '/path/to/image2.jpg',
            title: 'Title 2',
            buttonText: 'Button 2'
        },
        {
            imageUrl: '/path/to/image3.jpg',
            title: 'Title 3',
            buttonText: 'Button 3'
        },
        // Add more slides as needed
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <div className="pt-6 relative w-full">
            <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide.imageUrl}
                            className="object-cover w-full h-full"
                            alt={`Slide ${index + 1}`}
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-gray-10 bg-opacity-100 md:text-lg lg:text-xl">
                            <h1 className="text-2xl font-black text-white shadow-5xl md:text-3xl lg:text-4xl">{slide.title}</h1>
                            <p className="pt-4 text-center text-lg">Giving excellent Services from the Past 30 years. Making your drive smooth !!  </p>
                            <button className="mt-4 px-4 py-2 bg-red-500 rounded hover:bg-red-600 focus:outline-none">
                                {slide.buttonText}
                            </button>
                        </div>


                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
                <button
                    onClick={prevSlide}
                    className="absolute left-0 z-10 flex items-center justify-center w-12 h-12 text-white bg-black bg-opacity-50 focus:outline-none"
                >
                    {'<'}
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 z-10 flex items-center justify-center w-12 h-12 text-white bg-black bg-opacity-50 rounded-full focus:outline-none"
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
}

export default Carousel;
