const countAnagrams = (strs) => {
    
    let anagrams = new Map();
    
    for(let str of strs){
        let str_sorted = str.toLowerCase().split("").sort().join("");
        if(anagrams.has(str_sorted)){
            anagrams.set(str_sorted, anagrams.get(str_sorted)+1)
        } else { 
            anagrams.set(str_sorted, 1);
        }
    }
     return [...anagrams.values()].reduce((acc, curr)=>{
         if (curr>1) return acc + curr
         else return acc
        }, 0)
};
console.log(countAnagrams(["Top", "Pot", "Opt", "Spot", "Stop", "Tops", "Opts"]))