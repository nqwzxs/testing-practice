const caesarCipher = (string, shift) => {
  let result = '';

  for (let i = 0; i < string.length; i++) { 
    if (/[A-Za-z]/.test(string.charAt(i))) {
      result += String.fromCharCode((string.charCodeAt(i) - 97 + shift) % 26 + 97);
    } else {
      result += string.charAt(i);
    }
  }

  return result;
}

export default caesarCipher;