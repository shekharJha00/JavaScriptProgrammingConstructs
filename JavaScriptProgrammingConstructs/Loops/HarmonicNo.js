function nthHarmonic(N)
{
   let harmonic = 1.00;
 
    for (let i = 2; i <= N; i++)
    {
        harmonic += parseFloat(1) / i;
    }
 
    return harmonic;
}
const n=prompt("enter any no");
console.log(nthHarmonic(n));