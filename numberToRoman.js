function convertToRoman(num) {
    let roman = "";
    let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    
    while (num > 0) {
        for (let i = 0; i < numbers.length; i++) {
            if (num - numbers[i] >= 0) {
                roman = roman + romans[i];
                num -= numbers[i];
                
                break;
            }
        }
        
    }
    
    return roman;
}
   
console.log(convertToRoman(36));
console.log(convertToRoman(360));
console.log(convertToRoman(349));
console.log(convertToRoman(1443));
console.log(convertToRoman(9452));

//Outputs:
//XXXVI
//CCCLX
//CCCXLIX
//MCDXLIII
//MMMMMMMMMCDLII
