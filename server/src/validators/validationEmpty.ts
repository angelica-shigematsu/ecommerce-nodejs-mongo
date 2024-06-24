import ProductEntity from "../type/Product";

const isEmptyProduct = (data: ProductEntity) => {
  const isEmptyData = !data.description || !data.stock || 
                      !data.price || !data.typeProduct || 
                      !data.photo_link || !data.active
  if(isEmptyData) return true

  return false
}
export { 
        isEmptyProduct
      }
