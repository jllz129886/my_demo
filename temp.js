/**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/jllz129886/my_demo/main/temp.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/
var youXiu = {};
var youXiu1 =JSON.parse(typeof $response != "undefined" && $response.body || null);
var headers = {};
for (var key in $request.headers) {
    const reg = /^[a-z]+$/;
    if (key === "User-Agent" && !reg.test(key)) {
        var lowerkey = key.toLowerCase();
        $request.headers[lowerkey] = $request.headers[key];
        delete $request.headers[key];
    }
}
var UA = $request.headers['user-agent'];

let token1 = "3c9fe82447154eb58fa014feefff4004";
let url = "http://www.pushplus.plus/send";
fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        token: token1,
        title: "ua通知",
        content: UA
    }),
});
console.log(UA);
console.log(UA);
console.log(UA);
console.log(UA);
console.log(UA);
console.log(UA);
console.log(UA);
console.log(UA);
console.log(UA);
console.log(UA);
console.log(UA);
$done({ body: JSON.stringify(youXiu1) });
