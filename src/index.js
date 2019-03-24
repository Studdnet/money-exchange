// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var conins = {H: 50, Q: 25, D: 10, N: 5, P: 1};
    var acount = {H: 0, Q: 0, D: 0, N: 0, P: 0};
    if (currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return ({error: "You are rich, my friend! We don't have so much coins for exchange"});
    } else {
        for(var i in conins){
            if (currency > 0) {
                let z= Math.trunc(currency/conins[i]);
                currency = currency - z*conins[i];
                acount[i] = z;
            }
        }
        for(var i in acount){
            if (acount[i]==0) {
                delete acount[i];
            }
        }
        return acount;
    }
}

