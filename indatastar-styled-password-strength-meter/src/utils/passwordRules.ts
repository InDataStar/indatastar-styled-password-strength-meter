
export type StrengthLevel ='Weak'|'Medium'|'Strong'|undefined
//Add in length default is 8 cant be lower
export function evaluatePasswordStrength(password:string):StrengthLevel{
  if(!password) return 'Weak';

  let score = 0;

  if(password.length>=8) score += 1;
  if(/[A-Z]/.test(password)) score +=1;
  if(/[0-9]/.test(password)) score +=1;
  if(/[^A-Za-z0-9]/.test(password)) score +=1;

  if(score >= 4) return 'Strong';
  if(score >= 2) return 'Medium';

  return undefined;
}

export function isPasswordValid(password:string):boolean{
  return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]]/.test(password);
}