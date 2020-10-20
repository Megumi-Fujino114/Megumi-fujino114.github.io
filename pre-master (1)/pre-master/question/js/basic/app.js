
// 練習問題１
console.log("セブ島"+"留学");

// 練習問題２
console.log('①5たす8＝' + String(5 + 8));  //結果 9
console.log(4 - 2);  //結果 3
console.log(8 * 2);  //結果 15
console.log(6 / 3);  //結果 4
console.log(9 % 2);  //結果 1

// 練習問題3
let country ="japan";
console.log(country);

country = "Philippines";
console.log(country);

// 練習問題４

let job = "engineer"
console.log(`私の仕事は${job}です`);

// 練習問題５

let applications = ['LINE', 'Facebook', 'Twitter'];
console.log(applications);

applications.push("Instagram");
console.log(applications[3]);

// 練習問題６

let capitalCities = { Japan: 'Tokyo', Philippines: 'Manila'};
console.log(capitalCities);
capitalCities.America =	'Washington';
console.log(capitalCities.America);
// 連想は配列は波かっこで作るのが基本！


// 宿題内容
// クラスのみんなの名簿を二次元配列で作ってみましょう
// 二次元配列は配列の中に連想配列が入る
// リストの０番目の人を表示する
// リストの３番目の人の出身地を表示します
// リストの４番目の人の趣味を表示します

let student_list = [
{name:"Seedkun",from:"セブ島",hobby:"サーフィン"},
{name:"moe",from:"？",hobby:"カフェとか探す"},
{name:"sho",from:"岩手",hobby:"お酒"},
{name:"erika",from:"和歌山",hobby:"ウクレレ"},
{name:"Luis",from:"ﾍﾟﾙｰ",hobby:"フットサル"},
{name:"ヨッシー",from:"青森",hobby:"？"},
{name:"yuko",from:"京都",hobby:"インスタ"},
{name:"yudai",from:"大阪",hobby:"パチンコ"},
{name:"yutaka",from:"千葉",hobby:"勉強"},
{name:"ai",from:"兵庫",hobby:"おいしいものを食べる"},
{name:"shinya",from:"新木場",hobby:"ｼﾞｰﾏﾆｰ豆腐"},
{name:"このみ",from:"千葉",hobby:"ディズニー"}
];

console.log(student_list[0]["name"]);
console.log(student_list[3]["from"]);
console.log(student_list[4]["hobby"]);

// 練習問題７(条件分岐)
let weight = 115;
if (weight >= 200){
	console.log("ヘビー級");
} else if (weight >= 115 && weight<=118){
	console.log("バンダム級");
} else{
	console.log("そのほかの階級");
}

// 条件分岐の練習問題
let height = 160;
if(height >160){
	console.log("自分より大きい");
}else if(height >= 158 && height <= 160){
	console.log("自分と同じくらい");
}else{
	console.log("わからない");
}

// 練習問題８
let greeting = "goodmorning"

switch (greeting) {
	case "おはよう":
		console.log("日本語");
		break;
	case"goodmorning":
		console.log("英語");
		break;
	default:
	console.log("?");
	break;
}

// switch文練習
let language = "goodafternoo"

switch (language){
   case"こんにちは！":
   	console.log("日本語");
   	break;
   case"goodafternoon":
  	 console.log("英語");
  	 break;
  	 case"goodafternoo":
  	 console.log("何か間違えてる");
  	 break;
   default:
  	 console.log("?")
}

// switch文練習
let like = "readBook"

switch (like){
	case"sports":
		console.log("アクティブ");
		break;
	case"readBook":
		console.log("atHome");
		break;
	case"hungout":
		console.log("hungout");
		break;
	default:
		console.log("そのほか");
}

// 練習問題９

for (let i = 2; i <= 20; i++){
	console.log(i);
}

// for文練習(繰り返し)
for (let j =2; j <=10; j++){
	console.log(j);
}


// for文を使って
// student_list２のnameの部分をすべてconsoleに追加
let student_list2 =[
	{name:"Seedkun",from:"セブ島",hobby:"サーフィン"},
	{name:"moe",from:"？",hobby:"カフェとか探す"},
	{name:"sho",from:"岩手",hobby:"お酒"},
	{name:"erika",from:"和歌山",hobby:"ウクレレ"},
	{name:"Luis",from:"ﾍﾟﾙｰ",hobby:"フットサル"},
	{name:"ヨッシー",from:"青森",hobby:"？"},
	{name:"yuko",from:"京都",hobby:"インスタ"},
	{name:"yudai",from:"大阪",hobby:"パチンコ"},
	{name:"yutaka",from:"千葉",hobby:"勉強"},
	{name:"ai",from:"兵庫",hobby:"おいしいものを食べる"},
	{name:"shinya",from:"新木場",hobby:"ｼﾞｰﾏﾆｰ豆腐"},
	{name:"このみ",from:"千葉",hobby:"ディズニー"}
];

for (let i = 0 ;i < 12; i++){
	console.log(student_list2[i]["name"]);
}

// 練習問題
for(let i = 2; i <= 20; i++){
	console.log(i);
}

// 練習問題１０
let  j =1;
while (j <= 10){
	console.log(j);
	j++;
}

// 練習問題
// 初期式で変数iに１を代入する
// iが５０以下の間繰り返す
// １回ごとにiを1増やす
// 繰り返しの旅にiをconsoleに表示する
// ただしiが５の倍数でない場合は表示しない
for(let i = 1; i <= 50; i++){
 	if(i % 5 !== 0){
 		continue;
 	}
 	console.log(i);
 }

 // 練習問題
 //1-30までの間で３の倍数だけでないものを表示するプログラム
 // ３の倍数の時だけ処理が不要な為countinueでスキップする

for(let i = 1; i <= 30; i++){
 	if(i % 3 === 0){
 		continue;
 	}
 	console.log(i);
 }
// js練習問題
console.log("乱数を使ったプログラム");
// randomに０～１０の数字がランダムに代入される
var random = Math.floor( Math.random() * 6);
console.log( random );

// ランダム変数を使っておみくじをつくってみよう！
console.log("乱数を使ったおみくじ");
let omikuji = ["大吉","中吉","吉","小吉","凶","大凶",];
console.log(omikuji[random]);

// 練習問題ｊｓテキスト







