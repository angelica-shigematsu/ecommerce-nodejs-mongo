import validationCpf from "./validationCpf"
import isEmail from "./validationEmail"
import validationName from "./validationName"
import validationPhone from "./validationPhone"

export const validationUserData = (name: string, dateBirth: Date, cpf: string, phone: string, email: string) => {

  if (!validationName(name)) throw new Error(`Invalid name: Not accept number and only name`)

  if (!isEmail(email)) throw new Error(`Invalid email: ${email}`)

  if (!validationPhone(phone)) throw new Error(`Invalid phone`)

  if (!validationCpf(cpf)) throw new Error(`Invalid cpf`)

  if (new Date().getFullYear() - (new Date(dateBirth).getFullYear()) < 18) throw new Error(`is not possible register`)
}