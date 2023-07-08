const regExEmail = /^[^@ ,;{}\[\]$!%&*]+@[^@ \d ,;{}\[\]$!%&*]+\.[^@ \d ,;{}\[\]$!%&*]+/i

const isEmail = (email:string): boolean => {
  return regExEmail.test(email)
}

export default isEmail