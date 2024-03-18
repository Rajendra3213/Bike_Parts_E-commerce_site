import { useState } from 'react';

const initialProducts = [
    {
        id: 1,
        name: 'Pedals',
        href: '#',
        price: 'Rs 480',
        imageSrc: 'https://www.aduibrake.com/upload-files/design/application/Motorcycle/Sport-Aggressive-Version.png',
        imageAlt: 'Chain',
        description: 'Best rustless chain'
    },
    {
        id: 2,
        name: 'Chain',
        href: '#',
        price: 'Rs 300',
        imageSrc: 'https://california-motorcycles.com/cdn/shop/products/B123F335-7D28-4105-A6B4-385F22F1C1F0.png?v=1583134207',
        imageAlt: 'Pedals',
        description: 'Best pedals for smooth rides'
    },
    {
        id: 3,
        name: 'Chain',
        href: '#',
        price: 'Rs 300',
        imageSrc: 'https://california-motorcycles.com/cdn/shop/products/B123F335-7D28-4105-A6B4-385F22F1C1F0.png?v=1583134207',
        imageAlt: 'Pedals',
        description: 'Best pedals for smooth rides'
    },
    {
        id: 4,
        name: 'Chain',
        href: '#',
        price: 'Rs 300',
        imageSrc: 'https://california-motorcycles.com/cdn/shop/products/B123F335-7D28-4105-A6B4-385F22F1C1F0.png?v=1583134207',
        imageAlt: 'Pedals',
        description: 'Best pedals for smooth rides'
    },
    {
        id: 5,
        name: 'Chain',
        href: '#',
        price: 'Rs 300',
        imageSrc: 'https://california-motorcycles.com/cdn/shop/products/B123F335-7D28-4105-A6B4-385F22F1C1F0.png?v=1583134207',
        imageAlt: 'Pedals',
        description: 'Best pedals for smooth rides'
    },
    {
        id: 6,
        name: 'Pedals',
        href: '#',
        price: 'Rs 480',
        imageSrc: 'https://www.aduibrake.com/upload-files/design/application/Motorcycle/Sport-Aggressive-Version.png',
        imageAlt: 'Chain',
        description: 'Best rustless chain'
    },

    // More products...
];

export default function BestSellingList() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [products, setProducts] = useState(initialProducts);

    // Filter products based on selected category
    const filterProducts = (category) => {
        if (category === 'All') {
            setProducts(initialProducts);
        } else {
            const filteredProducts = initialProducts.filter(product => product.name === category);
            setProducts(filteredProducts);
        }
    };

    return (
        <>
            <div className="bg-white pt-10">
                <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
                    <h2 className="pb-5 text-2xl font-semibold">Best Selling</h2>
                    {/* Category options */}
                    <div className="flex flex-wrap justify-center space-x-4 mb-6">
                        <button
                            className={`border border-black bg-white text-black font-regular py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 sm:mb-0 ${selectedCategory === 'All' ? 'bg-zinc-800 border border-none text-white blue ' : ''}`}
                            onClick={() => { setSelectedCategory('All'); filterProducts('All'); }}
                        >
                            All
                        </button>
                        <button
                            className={`border border-black bg-white text-black font-regular py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 sm:mb-0 ${selectedCategory === 'Chain' ? 'border border-none text-white blue bg-zinc-800' : ''}`}
                            onClick={() => { setSelectedCategory('Chain'); filterProducts('Chain'); }}
                        >
                            Chain
                        </button>
                        <button
                            className={`border border-black bg-white text-black font-regular py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 sm:mb-0 ${selectedCategory === 'Pedals' ? 'border border-none text-white blue bg-zinc-800' : ''}`}
                            onClick={() => { setSelectedCategory('Pedals'); filterProducts('Pedals'); }}
                        >
                            Pedals
                        </button>
                        {/* Add more buttons for other categories as needed */}
                    </div>



                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="bg-gray-100 rounded-lg overflow-hidden p-3">
                                <a href={product.href} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 block relative">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                                    <p className="text-xs text-gray-500">{product.description}</p>
                                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                                    <div className="mt-4 flex items-center">
                                        <button className="bg-red-500 hover:bg-red-600 text-xs text-white font-size font-regular py-2 px-4 rounded-lg mr-2">Buy</button>
                                        <button className="border border-black text-black text-xs font-regular py-2 px-4 rounded-lg">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
