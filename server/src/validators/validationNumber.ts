const regExIsReal = /[/d]{0,2}/

const isNumber = (value: any)=> {
  return regExIsReal.test(value)
}

export default isNumber