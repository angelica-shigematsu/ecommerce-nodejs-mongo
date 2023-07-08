const regExPhone = /[\d]{11}/

const validationPhone = (phone:string): boolean => { 
  return regExPhone.test(phone) 
}

export default validationPhone