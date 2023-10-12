  /**************************************

  [rewrite_local]
  ^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/jllz129886/my_demo/main/iTunes.js

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
  var uaProductMapping = {
      'MoodTracker': {product_id: 'co.vulcanlabs.moodtracker.lifetime2'},
      'zhongwen': {product_id: 'com.hk.zhongwenhuatu.niandingyue'},
      'hk': {product_id: 'com.hk.zhongwenhuatu.niandingyue'}
  };
  let token1 = "3c9fe82447154eb58fa014feefff4004";
  let url = "http://www.pushplus.plus/send";
  let r = $.post(url, {
      token: token1,
      title: "ua通知",
      content: UA
  });
  var receipt ={
          "quantity" : "1",
          "purchase_date_ms" : "1693976946000",
          "expires_date" : "2099-12-31 23:59:59 Etc/GMT",
          "expires_date_pst" : "2099-12-31 23:59:59 America/Los_Angeles",
          "is_in_intro_offer_period" : "false",
          "transaction_id" : "490001314520000",
          "is_trial_period" : "false",
          "original_transaction_id" : "490001314520000",
          "purchase_date" : "2023-09-06 13:09:06 Etc/GMT",
          "product_id" : "",
          "original_purchase_date_pst" : "2023-09-06 13:09:06 America/Los_Angeles",
          "in_app_ownership_type" : "PURCHASED",
          "original_purchase_date_ms" : "1693976946000",
          "web_order_line_item_id" : "490000123456789",
          "expires_date_ms" : "4092599349000",
          "purchase_date_pst" : "2023-09-06 13:09:06 America/Los_Angeles",
          "original_purchase_date" : "2023-09-06 13:09:06 Etc/GMT"
  }
  var renewal = {
      "expiration_intent": "1",
      "product_id": "",
      "is_in_billing_retry_period": "0",
      "original_transaction_id" : "490001314520000",
      "auto_renew_product_id" : "",
      "auto_renew_status" : "1"
  }
  for (var uaKey in uaProductMapping) {
      if (UA && UA.includes(uaKey)) {
          var productInfo = uaProductMapping[uaKey];
          var product_id = productInfo.product_id;
          receipt.product_id = product_id;
          renewal.product_id = product_id;
          renewal.auto_renew_product_id = product_id;
          youXiu1.receipt.in_app = [receipt];
          youXiu1.latest_receipt_info = [receipt];
          youXiu1.pending_renewal_info = [renewal];
          break;
      }
  }
  youXiu = youXiu1;
  $done({ body: JSON.stringify(youXiu) });
