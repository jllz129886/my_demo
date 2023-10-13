/*

 彩云天气

 [rewrite_local]
 ^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) url script-response-body https://raw.githubusercontent.com/jllz129886/my_demo/main/cytq.js
 ^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

 [mitm]
 hostname = *.cyapi.cn, adx.sogaha.cn

*/


var youXiu = JSON.parse($response.body);
const urls = ['/vip_info', '/activity', 'user'];

urls.forEach(url => {
    if ($request.url.includes(url)){
        switch(url) {
            case '/vip_info':
                youXiu = {
                    ...youXiu,
                    vip: {
                        "expires_time" : "4102415999",
                        "is_auto_renewal" : true
                    },
                    svip: {
                        "expires_time" : "4102415999",
                        "is_auto_renewal" : true
                    }
                }
                break;
            case '/activity':
                youXiu.activities = [];
                break;
            case 'user':
                youXiu.result = {
                    ...youXiu.result,
                    ranking_above: 99,
                    is_vip: true,
                    vip_expired_at: 4102415999,
                    svip_given: 9999,
                    is_xy_vip: true,
                    xy_svip_expire: 4102415999,
                    wt: {
                        ...youXiu.result.wt,
                        vip: {
                            "auto_renewal_type" : "",
                            "expired_at" : 0,
                            "enabled" : true,
                            "svip_apple_expired_at" : 4102415999,
                            "is_auto_renewal" : true,
                            "svip_expired_at" : 4102415999,
                            "svip_auto_renewal_type" : ""
                        },
                        svip_given: 9999,
                        ranking_above: 99,
                    },
                    is_phone_verified: true,
                    phone_num: "13145200000",
                    vip_take_effect: 1,
                    is_primary: true,
                    xy_vip_expire: 4102415999,
                    svip_expired_at: 4102415999,
                    svip_take_effect: 1,
                    vip_type: "s",
                    name: "优秀",
                    avatar: "http://img.crcz.com/allimg/202001/21/1579536384677793.jpg",
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uIjoiNjUyMWY3OGQwNDFlNjIwMDE4MDU3YzYyIiwidXNlcl9pZCI6IjY1MDFhMzkxMjQ0NWI5MDAxOGQxYjBlMCIsInZlcnNpb24iOjIsImV4cCI6MTY5OTcxOTg1OCwidmlwX2V4cGlyZWRfYXQiOjAsImlzcyI6IndlYXRoZXIiLCJpYXQiOjE2OTcxMjc4NTgsInN2aXBfZXhwaXJlZF9hdCI6MCwicHJpbWFyeSI6dHJ1ZX0.U6AkP3HcOzP5kd49nXGV71NC4VrPe57ZQqSfyCG-Dv0"
                }
                break;
        }
    }
})

$done({ body: JSON.stringify(youXiu)});
