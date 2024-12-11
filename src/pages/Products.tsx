import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

export const Products = () => {
  // Example products data - in a real app, this would come from an API
  const products: Product[] = [
    {
      id: 1,
      categoria_id: 1,
      nombre: 'Wireless Headphones',
      descripcion: 'High-quality wireless headphones with noise cancellation',
      stock: 50,
      precioventa: 199.99,
      library: {
        images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e'],
      },
    },
    {
      id: 2,
      categoria_id: 1,
      nombre: 'Smart Watch',
      descripcion: 'Feature-rich smartwatch with health tracking',
      stock: 30,
      precioventa: 299.99,
      library: {
        images: ['https://images.unsplash.com/photo-1546868871-7041f2a55e12'],
      },
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};