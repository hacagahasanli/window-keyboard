export const keepLowerCaseLetters = (letters: string[]) => {
    let regex = /[a-z]/g

    const newLetters = letters.filter(letter => letter.match(regex))

    return newLetters
}