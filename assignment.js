function kilometerToMeter(num) {
    if(num < 0 ){
        // console.log('wrong parameter');
        return "wrong parameter";
    }
    else{
        var meter = num*1000;
        return meter;
    }
}
var result1 = kilometerToMeter(4);
console.log(result1);

function budgetCalculator(watch,mobile,laptop) {
    if(watch < 0){
        return 'wrong input for watch'
    }
    else if(mobile < 0){
        return 'wrong input for mobile'
    }
    else if(laptop < 0){
        return 'wrong input for laptop'
    }
    
    else{
        var priceOfWatch = watch*50;
        var priceOfmobile = mobile*100;
        var priceOflaptop = laptop*500;
        var total = priceOfWatch + priceOfmobile + priceOflaptop;
        return total;
    }
}
var resultOfBudget = budgetCalculator(3,4,7);
console.log(resultOfBudget);

function hotelCost(day) {
    var totalCost = 0;
    if(day<=10){
        totalCost = day*100;
    }
    else if(day>10 && day<=20){
        var firstTenDays = 10;
        var secondTenDays = day - firstTenDays;
        var costOfFirstTenDays = firstTenDays * 100;
        var costOfsecondTenDays = secondTenDays * 80;
        totalCost = costOfFirstTenDays + costOfsecondTenDays;
    }
    else{
        var firstTenDays = 10;
        var secondTenDays = 10;
        var restOfTheDays = day - (firstTenDays+secondTenDays);
        var costOfFirstTenDays = firstTenDays * 100;
        var costOfsecondTenDays = secondTenDays * 80;
        var costOfRestOfTheDays = restOfTheDays *  50;
        totalCost = costOfFirstTenDays + costOfsecondTenDays + costOfRestOfTheDays;
    }
    return totalCost;
}
var result3 = hotelCost(71);
console.log(result3);

function megaFriend(arr) {
    maxName = '';
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element.length > maxName.length){
            maxName = element;
        }
        
    }
    return maxName;
}
var nameOfFriend = ['kamal','anik','mostafigur','ani'];
var result4 = megaFriend(nameOfFriend);
console.log(result4);