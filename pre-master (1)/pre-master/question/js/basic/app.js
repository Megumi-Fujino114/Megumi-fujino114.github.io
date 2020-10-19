
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
{name:"shinya",from:"新木場",hobby:"ｼﾞｰﾏﾆｰ豆腐"}
{name:"このみ",from:"千葉",hobby:"ディズニー"}
];

console.log(student_list[0]["name"]);
console.log(student_list[2]["from"]);
console.log(student_list[3]["hobby"]);

// 練習問題７
let weight = 115;
if (weight >= 200){
	console.log("ヘビー級");
} else if (weight >= 115 && weight<=118){
	console.log("バンダム級");
} else{
	console.log("そのほかの階級");
}
