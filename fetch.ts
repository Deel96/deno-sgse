const fetchResult = await fetch("https://deno.land/");
const isOk: boolean = fetchResult.ok;
console.log(isOk);
