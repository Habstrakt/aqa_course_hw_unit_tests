function validatePassword(password: string):boolean {
  if (password.length < 8) return false;
  if (password.trim().length === 0) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/\d/.test(password)) return false;

  return true
}

console.log(validatePassword("Nagibator777"));
console.log(validatePassword("nagibator"));
console.log(validatePassword("    "));
console.log(validatePassword("la2"));