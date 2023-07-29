const regExIsReal = /^\d+(.|,\d{1,2})$/

const isNumber = (value: any)=> {
  return regExIsReal.test(value)
}

export default isNumber