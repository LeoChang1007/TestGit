/**
 * Created by alone on 2016/10/5.
 */
var _=require('lodash');
var Q = require('q');
var uuid = require('node-uuid');
var Utils = require('meanio').Utils;

exports.getSingleAvail=function(database){
    var params={item_id:'841ce080-69de-11e6-9947-6f0a68fb63ff',start_ts:'2016-10-05 07:20',end_ts:'2016-10-06 07:20'};
    //var searchedKey = { id: true, state: true, description: true, ts:true};
    // var orderKey    = { id: 'uuid_time(id)', name: 'name', description: 'description'};
    var sql = 'select h1.*,(select min(h2.ts) from machine_state_hists h2 where h2.item_id=$item_id ' +
        'and h2.ts > h1.ts and h2.ts < $end_ts) end_ts from machine_state_hists h1 where h1.item_id=$item_id '+
        'and h1.ts >= $start_ts and h1.ts <=$end_ts';
    var exStateSql = 'select * from machine_state_hists where  item_id=$item_id ' +
        'and ts =(select max(ts) from machine_state_hists where item_id=$item_id and ts <$start_ts)';
    var startDate = new Date(params.start_ts),
        endDate = new Date(params.end_ts),
        interval = (endDate - startDate) / 1000;
    database.trans([sql, exStateSql], params)
        .then(function (results) {
            console.log('startDate:', startDate, ' endDate:', endDate, ' interval:', interval, 'origin:', endDate - startDate);
            console.log('results[0]', results[0]);
            var availTime = 0, tmp;
            if (results[1].rows[0] !== undefined && results[0].rows[0] !== undefined) {
                if (results[0].rows[0].state <= 7)
                    availTime += (results[0].rows[0].ts - startDate) / 1000;
                console.log('availTime:', availTime);
            }
            _.forEach(results[0].rows, function (row) {
                if (row.state <= 7) {
                    console.log(row.state, ' ts:', row.ts, 'end_ts', row.end_ts, 'row.end_ts-row.ts:', (row.end_ts - row.ts) / 1000);
                    tmp = row.end_ts ? (row.end_ts - row.ts) / 1000 : (endDate - row.ts) / 1000;
                    availTime += tmp;
                    console.log('available time:', availTime, 'available%:', Math.round(availTime / interval * 100) + '%');
                }
            });
        })
        .catch(function(err) {
            console.log(err.stack);
        });

};