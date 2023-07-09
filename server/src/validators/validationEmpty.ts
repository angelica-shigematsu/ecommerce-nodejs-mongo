import ProductEntity from "../type/Product";
import UserEntity from "../type/User";

const isEmptyUser = (data:UserEntity) => {
  const isEmptyData = !data.name || !data.address || 
                      !data.city || !data.cpf || 
                      !data.dateBirth || !data.email || 
                      !data.numberHouse || !data.phone || 
                      !data.state || !data.active || !data.level
  if(isEmptyData) return true

  return false
}

const isEmptyProduct = (data: ProductEntity) => {
  const isEmptyData = !data.description || !data.stock || 
                      !data.price || !data.typeProduct || 
                      !data.photo_link || !data.active
  if(isEmptyData) return true

  return false
}
export { 
        isEmptyProduct, 
        isEmptyUser 
      }
