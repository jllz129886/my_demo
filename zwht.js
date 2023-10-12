var youXiu = {};
    var youXiu1 =JSON.parse(typeof $response != "undefined" && $response.body || null);
    var product_id = "com.hk.zhongwenhuatu.niandingyue";
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
            "product_id" : product_id,
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
        "product_id": product_id,
        "is_in_billing_retry_period": "0",
        "original_transaction_id" : "490001314520000",
        "auto_renew_product_id" : product_id,
        "auto_renew_status" : "1"
    }

    youXiu1.receipt.in_app = [receipt];
    youXiu1.latest_receipt_info = [receipt];
    youXiu1.pending_renewal_info = [renewal];

    youXiu = youXiu1;
    $done({ body: JSON.stringify(youXiu) });
