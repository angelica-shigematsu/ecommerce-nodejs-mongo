import UserEntity from "../type/User";

export const isEmpty = (data:UserEntity) => {
  const isEmptyData = !data.name || !data.address || 
                      !data.city || !data.cpf || 
                      !data.dateBirth || !data.email || 
                      !data.numberHouse || !data.phone || 
                      !data.state
  if(isEmptyData) return true

  return false
}