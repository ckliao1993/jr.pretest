/* 實作 Fibonacci number (費式數列)
建立函式 fibonacci 代入參數 position，position 表示的是想要得到 fibonacci sequence 中的第幾個數字的值。
fibonacci(0) // 0
fibonacci(1) // 1
fibonacci(2) // 1
fibonacci(3) // 2
fibonacci(4) // 3 */

//Ans
function fibonacci(position){
	if(position<2){
		return position;
	}
	return fib(position-1)+fib(position-2);
}