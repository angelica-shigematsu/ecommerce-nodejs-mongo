const regExHasNumber= /[\d]+/

const validationName = (name: string): boolean => {
  const isCharacter = regExHasNumber.test(name)
  const hasMoreThanOneName = name.split(' ').length > 1

  return !isCharacter && hasMoreThanOneName
}

export default validationName