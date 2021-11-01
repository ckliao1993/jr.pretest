/* 實作 Debounce
debounce 是在 delay 時間內如果重新觸發會取消前一次並保留當下觸發的執行。
throttle 在觸發後的 timeout 時間內只會執行一次。
建立函式 debounce 或 throttle 帶入參數如下範例： 
const debounceFunc = debounce(func, delay) 
const throttleFunc = throttle(func, timeout) */

//Ans
function debounce(func, delay) {
	let timer = null;
	return () => {
		let context = this;
		let args = arguments;
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(context, args);
		}, delay)
	}
}

/* (加分題) 使用 Event Loop 結合實際操作範例擇一敘述 Debounce 或 Throttle 的運作方式
如文字輸入、scroll 操作與 button 連續點擊，或是其他可結合 Debounce 或 Throttle
的行為都可以拿來當作操作範例。 */

//Ans
//用jQuery綁定input元件使用者按下按鍵的動作，
//每次按下按鍵都會讓debounce內的timer重新計時，
//直到使用者停止打字後一秒(timer計時的一秒內都沒有按下任何按鍵)，
//才會執行func函式
$('input').on('keyup', debounce(
	function() {
		//檢查使用者輸入的資料是否符合規範
	},1000)
)
