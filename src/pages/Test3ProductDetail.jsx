import React, { useState, useEffect } from "react";
import { ArrowLeft, Heart, ShoppingCart, Star, Truck, Shield, RefreshCw } from "lucide-react";

const ProductDetailPage = () => {
  const [currentProductId, setCurrentProductId] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock data produk
  const products = {
    1: {
      id: 1,
      name: "Ayat Pilihan (Free)",
      description: "Kumpulan ayat-ayat pilihan Al-Quran yang dapat membantu dalam kehidupan sehari-hari. Aplikasi ini menyediakan berbagai ayat dengan terjemahan dan tafsir yang mudah dipahami.",
      price: 0,
      originalPrice: 29000,
      category: "Aplikasi Islami",
      rating: 4.8,
      reviews: 1250,
      images: [
        "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      ],
      features: ["Akses offline ke ayat-ayat pilihan", "Terjemahan dalam bahasa Indonesia", "Fitur pencarian ayat", "Bookmark ayat favorit", "Notifikasi harian"],
      specifications: {
        Ukuran: "25 MB",
        Kompatibilitas: "Android 5.0+",
        Bahasa: "Indonesia, Arab",
        "Update Terakhir": "15 Januari 2025",
      },
    },
    2: {
      id: 2,
      name: "10 Hari Hafal Al-Muzzammil",
      description: "Program hafalan surat Al-Muzzammil dengan metode yang telah terbukti efektif. Dilengkapi dengan panduan audio dan teknik menghafal yang mudah diikuti.",
      price: 45000,
      originalPrice: 75000,
      category: "Program Hafalan",
      rating: 4.9,
      reviews: 875,
      images: ["https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=300&fit=crop", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"],
      features: ["Panduan hafalan 10 hari", "Audio murotal berkualitas tinggi", "Metode hafalan terbukti", "Progress tracking", "Sertifikat digital"],
      specifications: {
        Durasi: "10 Hari",
        Format: "Video + Audio",
        Ukuran: "150 MB",
        Bahasa: "Indonesia, Arab",
      },
    },
    3: {
      id: 3,
      name: "30 Hari Hafal Al-Mulk",
      description: "Program intensif hafalan surat Al-Mulk dalam 30 hari. Metode pembelajaran yang sistematis dan mudah diikuti untuk semua kalangan.",
      price: 65000,
      originalPrice: 95000,
      category: "Program Hafalan",
      rating: 4.7,
      reviews: 642,
      images: ["https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=300&fit=crop", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"],
      features: ["Program hafalan 30 hari", "Metode bertahap", "Audio panduan", "Evaluasi harian", "Komunitas pembelajar"],
      specifications: {
        Durasi: "30 Hari",
        Format: "Video + Audio + PDF",
        Ukuran: "200 MB",
        Bahasa: "Indonesia, Arab",
      },
    },
  };

  // Simulasi loading dan fetch data berdasarkan ID
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setProduct(products[currentProductId] || null);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentProductId]);

  const handleProductChange = (id) => {
    setCurrentProductId(id);
    setSelectedImage(0);
    setQuantity(1);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 text-orange-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😔</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <ArrowLeft className="w-6 h-6 text-gray-600" />
              </button>
              <h1 className="ml-3 text-lg font-semibold text-gray-900 truncate">Product Detail</h1>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Heart className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Selector for Demo */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex space-x-2 overflow-x-auto">
            {Object.values(products).map((prod) => (
              <button
                key={prod.id}
                onClick={() => handleProductChange(prod.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${currentProductId === prod.id ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Product {prod.id}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-sm">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index ? "border-orange-500" : "border-gray-200 hover:border-gray-300"}`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded">{product.category}</span>
                {product.price === 0 && <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">FREE</span>}
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-900">{product.rating}</span>
                </div>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-gray-900">{product.price === 0 ? "FREE" : formatPrice(product.price)}</span>
              {product.originalPrice > product.price && <span className="text-lg text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>}
            </div>

            <p className="text-gray-600 text-base leading-relaxed">{product.description}</p>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-900">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 hover:bg-gray-100 transition-colors">
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[50px] text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-gray-100 transition-colors">
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors">Buy Now</button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                <span className="font-medium text-gray-700">{key}</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
