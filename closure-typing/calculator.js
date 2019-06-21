@@ -1,5 +1,72 @@
function calculator() {


function calculator(expr) {
  // your code here
  /*expr = trim.expr();*/

	var nums = [];
	var signs = [];

	
	var cur = 0;
	for (var i = 0; i < expr.length; i++){
		var s = expr[i];
		
		if (s == '='){
			break;
		}
		
		if  (!isNaN(s) || s == '.')
		{
			if (i == expr.length - 1)
			{
				nums.push(parseFloat(expr.substring(cur,i+1)));
			}
			continue;
		}
		if (i == cur){
			return "invalid expression";
		}
		if ('/*-+'.indexOf(s) != -1){
			signs.push(s);
			nums.push(parseFloat(expr.substring(cur,i)));
			cur = i+1;
			continue;
		}
		
		return "invalid expression";
	}
	
	for (i = 0; i < signs.length; i++){
		if (signs[i] == '*'){
			nums[i] = nums[i] * nums[i+1]; 
		}
		else if (signs[i] == '/') {
			nums[i] = nums[i] / nums[i+1];
		}
		else{
			continue;
		}
		nums.splice(i+1,1);
		signs.splice(i,1);
		i--;
	}

	for (i = 0; i < signs.length; i++){
		if (signs[i] == '+'){
			nums[i] = nums[i] + nums[i+1]; 
		}
		else if (signs[i] == '-') {
			nums[i] = nums[i] - nums[i+1];
		}
		else{
			continue;
		}
		nums.splice(i+1,1);
		signs.splice(i,1);
		i--;
	}
return(nums[0]);
}

module.exports = calculator;
