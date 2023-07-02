const isEmail = (email:string): boolean => {
  return /^[a-zA-Z0-9._-]+[@]+[a-z]+\.[a-z]+/i.test(email)
}

export default isEmail