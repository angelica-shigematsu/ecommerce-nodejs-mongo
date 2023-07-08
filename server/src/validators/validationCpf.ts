const regExCpf = /[\d]{11}/

const validationCpf = (phone:string): boolean => { 
  return regExCpf.test(phone) 
}

export default validationCpf