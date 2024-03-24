
const products = [
  {
    id: 1,
    name: 'Chain',
    href: '#',
    price: 'Rs 480',
    imageSrc: 'https://california-motorcycles.com/cdn/shop/products/B123F335-7D28-4105-A6B4-385F22F1C1F0.png?v=1583134207',
    imageAlt: 'Chain',
    description: 'Best rustless chain'
  },
  {
    id: 1,
    name: 'Chain',
    href: '#',
    price: 'Rs 480',
    imageSrc: 'https://www.store4riders.com/media/catalog/product/cache/72998e07b4001f860232736e27851ad9/a/x/axor_apex_solid_black_3_-_copy.png',
    imageAlt: 'Chain',
    description: 'Best rustless chain'
  },
  {
    id: 1,
    name: 'Chain',
    href: '#',
    price: 'Rs 480',
    imageSrc: 'https://california-motorcycles.com/cdn/shop/products/B123F335-7D28-4105-A6B4-385F22F1C1F0.png?v=1583134207',
    imageAlt: 'Chain',
    description: 'Best rustless chain'
  },
  {
    id: 1,
    name: 'Chain',
    href: '#',
    price: 'Rs 480',
    imageSrc: 'https://california-motorcycles.com/cdn/shop/products/B123F335-7D28-4105-A6B4-385F22F1C1F0.png?v=1583134207',
    imageAlt: 'Chain',
    description: 'Best rustless chain'
  },
  {
    id: 1,
    name: 'Chain',
    href: '#',
    price: 'Rs 480',
    imageSrc: 'https://www.aduibrake.com/upload-files/design/application/Motorcycle/Sport-Aggressive-Version.png',
    imageAlt: 'Chain',
    description: 'Best rustless chain'
  },
  {
    id: 1,
    name: 'Chain',
    href: '#',
    price: 'Rs 480',
    imageSrc: 'https://california-motorcycles.com/cdn/shop/products/B123F335-7D28-4105-A6B4-385F22F1C1F0.png?v=1583134207',
    imageAlt: 'Chain',
    description: 'Best rustless chain'
  },
  {
    id: 1,
    name: 'Chain',
    href: '#',
    price: 'Rs 480',
    imageSrc: 'https://www.aduibrake.com/upload-files/design/application/Motorcycle/Sport-Aggressive-Version.png',
    imageAlt: 'Chain',
    description: 'Best rustless chain'
  },
  {
    id: 1,
    name: 'Chain',
    href: '#',
    price: 'Rs 480',
    imageSrc: 'https://www.store4riders.com/media/catalog/product/cache/72998e07b4001f860232736e27851ad9/a/x/axor_apex_solid_black_3_-_copy.png',
    imageAlt: 'Chain',
    description: 'Best rustless chain'
  },



  // More products...
]

export default function TrendingProduct() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="pb-10 text-2xl font-semibold">Trending Products</h2>
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
                    {/* <button className="bg-red-500 hover:bg-red-600 text-xs text-white font-size font-regular py-2 px-4 rounded-lg mr-2">Buy</button> */}
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

