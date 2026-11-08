import cafeData from './cafe.json';
import productData from './product.json';
import corporateData from './corporate.json';

export const brands = {
  cafe: cafeData,
  product: productData,
  corporate: corporateData,
};

export const availableBrands = [
  { id: 'cafe', name: 'The Artisan Brew', category: 'Quán Cafe & Nước' },
  { id: 'product', name: 'AuraSound Apex', category: 'Sản Phẩm Công Nghệ' },
  { id: 'corporate', name: 'Nexus Global', category: 'Doanh Nghiệp & Tư Vấn' },
];

/**
 * Lấy dữ liệu thương hiệu từ query param URL, ví dụ: ?brand=product
 * Mặc định trả về 'cafe' nếu không có hoặc không hợp lệ.
 */
export function getCurrentBrandData() {
  if (typeof window === 'undefined') return cafeData;
  const params = new URLSearchParams(window.location.search);
  const brandKey = params.get('brand')?.toLowerCase();
  
  if (brandKey && brands[brandKey]) {
    return brands[brandKey];
  }
  return cafeData;
}

