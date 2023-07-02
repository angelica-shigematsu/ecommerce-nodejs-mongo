const hasCharacter = (phone:string): boolean => { 
  return /[a-z]/i.test(phone) 
}

export default hasCharacter