'use strict';
var moment = require('moment');

exports.handler = (event, context, callback) => {

    var originURL = process.env.ORIGIN_URL || '*';

    var samCount = 2;
    var samMultiplier = process.env.SAM_MULTIPLIER || 1;

    var totalSAMs = samCount * samMultiplier;

    console.log('The number of SAMs to show: ' + samCount);
    console.log('Multiplier to apply to SAMs: ' + samMultiplier);
    console.log('Total number of SAMs to show: ' + totalSAMs);

    callback(null, {
        "statusCode": 200,
        "body": totalSAMs,
        "headers":
        {
            "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods": "GET,OPTIONS",
            "Access-Control-Allow-Origin": originURL
        }
    });
}
