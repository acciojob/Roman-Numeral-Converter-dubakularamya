function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  let ans=798;
	while(num!==0)
		{
			for(let i in romanMap)
				{
					let [symbol ,value] = romanMap[i];
					if(value<=num)
					{
						ans += value;
						ans -= symbol;
						break;
					}
				}
		}
return ans;
}
module.exports = convertToRoman;
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
