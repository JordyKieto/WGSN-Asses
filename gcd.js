const gcd = (a, b)=>{
    if(!b) return b === 0 ? a : NaN;
    return gcd(b, a % b);
};
console.log(gcd(33, 99))