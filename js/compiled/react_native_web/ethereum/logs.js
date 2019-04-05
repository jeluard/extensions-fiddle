// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('react_native_web.ethereum.logs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('status_im.abi_spec');
goog.require('re_frame.core');
goog.require('react_native_web.ethereum');
react_native_web.ethereum.logs.types_mapping = (function react_native_web$ethereum$logs$types_mapping(type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("bool",type)){
return cljs.core.cst$kw$bool;
} else {
if(clojure.string.starts_with_QMARK_(type,"uint")){
return cljs.core.cst$kw$uint;
} else {
if(clojure.string.starts_with_QMARK_(type,"int")){
return cljs.core.cst$kw$int;
} else {
if(clojure.string.starts_with_QMARK_(type,"address")){
return cljs.core.cst$kw$address;
} else {
if(clojure.string.starts_with_QMARK_(type,"bytes")){
return cljs.core.cst$kw$bytes;
} else {
if(clojure.string.starts_with_QMARK_(type,"fixed")){
return cljs.core.cst$kw$bytes;
} else {
return cljs.core.cst$kw$bytes;

}
}
}
}
}
}
});
react_native_web.ethereum.logs.values_topic_enc = (function react_native_web$ethereum$logs$values_topic_enc(type,values){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__1498_SHARP_){
return ["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__1500 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,react_native_web.ethereum.logs.types_mapping(type),cljs.core.cst$kw$value,p1__1498_SHARP_], null);
return (status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1 ? status_im.abi_spec.enc.cljs$core$IFn$_invoke$arity$1(G__1500) : status_im.abi_spec.enc.call(null,G__1500));
})())].join('');
}),values);
});
react_native_web.ethereum.logs.event_topic_enc = (function react_native_web$ethereum$logs$event_topic_enc(event,params){
var eventid = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(event),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",params)),")"].join('');
return status_im.abi_spec.sha3(eventid);
});
react_native_web.ethereum.logs.generate_topic = (function react_native_web$ethereum$logs$generate_topic(t){
if((((t == null)) || (typeof t === 'string'))){
return t;
} else {
if(cljs.core.vector_QMARK_(t)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(react_native_web.ethereum.logs.generate_topic,t);
} else {
if(cljs.core.map_QMARK_(t)){
var map__1501 = t;
var map__1501__$1 = (((((!((map__1501 == null))))?(((((map__1501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1501):map__1501);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1501__$1,cljs.core.cst$kw$event);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1501__$1,cljs.core.cst$kw$params);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1501__$1,cljs.core.cst$kw$type);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1501__$1,cljs.core.cst$kw$values);
if((!((event == null)))){
return react_native_web.ethereum.logs.event_topic_enc(event,params);
} else {
if((!((type == null)))){
return react_native_web.ethereum.logs.values_topic_enc(type,values);
} else {
return null;

}
}
} else {
return null;

}
}
}
});
react_native_web.ethereum.logs.ensure_hex_bn = (function react_native_web$ethereum$logs$ensure_hex_bn(block){
if((block == null)){
return block;
} else {
if(cljs.core.truth_(cljs.core.re_matches(/^[0-9]+$/,block))){
return ["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_im.abi_spec.number_to_hex(block))].join('');
} else {
return block;

}
}
});
/**
 * Return a vector with indexed elements
 */
react_native_web.ethereum.logs.get_indexed = (function react_native_web$ethereum$logs$get_indexed(X,indexed){
var keys = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(X),cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (keys){
return (function (p1__1503_SHARP_){
var fexpr__1504 = cljs.core.zipmap(keys,X);
return (fexpr__1504.cljs$core$IFn$_invoke$arity$1 ? fexpr__1504.cljs$core$IFn$_invoke$arity$1(p1__1503_SHARP_) : fexpr__1504.call(null,p1__1503_SHARP_));
});})(keys))
,indexed);
});
/**
 * Return a vector without indexed elements
 */
react_native_web.ethereum.logs.get_no_indexed = (function react_native_web$ethereum$logs$get_no_indexed(X,indexed){
var $ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(X),cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var $__$1 = cljs.core.zipmap($,X);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.vals(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,$__$1,indexed)));
});
/**
 * Return a map with all data params decoded
 */
react_native_web.ethereum.logs.decode_data = (function react_native_web$ethereum$logs$decode_data(data,hint){
var indexes = (function (){var G__1505 = cljs.core.cst$kw$indexed;
return (hint.cljs$core$IFn$_invoke$arity$1 ? hint.cljs$core$IFn$_invoke$arity$1(G__1505) : hint.call(null,G__1505));
})();
var params = react_native_web.ethereum.logs.get_no_indexed((function (){var G__1506 = cljs.core.cst$kw$params;
return (hint.cljs$core$IFn$_invoke$arity$1 ? hint.cljs$core$IFn$_invoke$arity$1(G__1506) : hint.call(null,G__1506));
})(),indexes);
var names = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,react_native_web.ethereum.logs.get_no_indexed((function (){var G__1507 = cljs.core.cst$kw$names;
return (hint.cljs$core$IFn$_invoke$arity$1 ? hint.cljs$core$IFn$_invoke$arity$1(G__1507) : hint.call(null,G__1507));
})(),indexes));
var data_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.str),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((64),clojure.string.replace_first(data,/0x/,"")));
return cljs.core.zipmap(names,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(status_im.abi_spec.hex_to_value,data_values,params));
});
/**
 * This assumes that Topic 0 is filtered and return a map with all topics decoded
 */
react_native_web.ethereum.logs.decode_topics = (function react_native_web$ethereum$logs$decode_topics(topics,hint){
return cljs.core.zipmap(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$topic1,cljs.core.cst$kw$topic2,cljs.core.cst$kw$topic3], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(status_im.abi_spec.hex_to_value,topics,react_native_web.ethereum.logs.get_indexed((function (){var G__1508 = cljs.core.cst$kw$params;
return (hint.cljs$core$IFn$_invoke$arity$1 ? hint.cljs$core$IFn$_invoke$arity$1(G__1508) : hint.call(null,G__1508));
})(),(function (){var G__1509 = cljs.core.cst$kw$indexed;
return (hint.cljs$core$IFn$_invoke$arity$1 ? hint.cljs$core$IFn$_invoke$arity$1(G__1509) : hint.call(null,G__1509));
})())));
});
/**
 * Flatten the input of event provided by an developer of extensions and return a 1 depth vector
 */
react_native_web.ethereum.logs.flatten_input = (function react_native_web$ethereum$logs$flatten_input(input){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.flatten(input));
});
/**
 * Return the hint with the specified event (Topic0) from a vector of event hints given by the user
 */
react_native_web.ethereum.logs.get_hint = (function react_native_web$ethereum$logs$get_hint(hints,first_topic){
var $ = hints;
var $__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function ($){
return (function (p1__1510_SHARP_){
return react_native_web.ethereum.logs.event_topic_enc((function (){var G__1511 = cljs.core.cst$kw$event;
return (p1__1510_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__1510_SHARP_.cljs$core$IFn$_invoke$arity$1(G__1511) : p1__1510_SHARP_.call(null,G__1511));
})(),(function (){var G__1512 = cljs.core.cst$kw$params;
return (p1__1510_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__1510_SHARP_.cljs$core$IFn$_invoke$arity$1(G__1512) : p1__1510_SHARP_.call(null,G__1512));
})());
});})($))
,$);
var $__$2 = $__$1.indexOf(first_topic);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(hints,$__$2);
});
react_native_web.ethereum.logs.parse_log = (function react_native_web$ethereum$logs$parse_log(events_hints,p__1514){
var map__1515 = p__1514;
var map__1515__$1 = (((((!((map__1515 == null))))?(((((map__1515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1515):map__1515);
var logIndex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1515__$1,cljs.core.cst$kw$logIndex);
var removed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1515__$1,cljs.core.cst$kw$removed);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1515__$1,cljs.core.cst$kw$data);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1515__$1,cljs.core.cst$kw$address);
var blockHash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1515__$1,cljs.core.cst$kw$blockHash);
var transactionHash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1515__$1,cljs.core.cst$kw$transactionHash);
var transactionIndex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1515__$1,cljs.core.cst$kw$transactionIndex);
var topics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1515__$1,cljs.core.cst$kw$topics);
var blockNumber = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1515__$1,cljs.core.cst$kw$blockNumber);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$data,data,cljs.core.cst$kw$topics,topics,cljs.core.cst$kw$address,address,cljs.core.cst$kw$removed,removed], null),(cljs.core.truth_((function (){var and__4120__auto__ = topics;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(events_hints);
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$topics,react_native_web.ethereum.logs.decode_topics(cljs.core.filterv(((function (map__1515,map__1515__$1,logIndex,removed,data,address,blockHash,transactionHash,transactionIndex,topics,blockNumber){
return (function (p1__1513_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(topics),p1__1513_SHARP_)));
});})(map__1515,map__1515__$1,logIndex,removed,data,address,blockHash,transactionHash,transactionIndex,topics,blockNumber))
,topics),react_native_web.ethereum.logs.get_hint(events_hints,cljs.core.first(topics)))], null):null),(cljs.core.truth_((function (){var and__4120__auto__ = data;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(events_hints);
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,react_native_web.ethereum.logs.decode_data(data,react_native_web.ethereum.logs.get_hint(events_hints,cljs.core.first(topics)))], null):null),(cljs.core.truth_(logIndex)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$log_DASH_index,status_im.abi_spec.hex_to_number(logIndex)], null):null),(cljs.core.truth_(transactionIndex)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transaction_DASH_index,status_im.abi_spec.hex_to_number(transactionIndex)], null):null),(cljs.core.truth_(transactionHash)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transaction_DASH_hash,transactionHash], null):null),(cljs.core.truth_(blockHash)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$block_DASH_hash,blockHash], null):null),(cljs.core.truth_(blockNumber)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$block_DASH_number,status_im.abi_spec.hex_to_number(blockNumber)], null):null)], 0));
});
react_native_web.ethereum.logs.execute_get_logs = (function react_native_web$ethereum$logs$execute_get_logs(p__1518,ethereum_addr){
var map__1519 = p__1518;
var map__1519__$1 = (((((!((map__1519 == null))))?(((((map__1519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1519):map__1519);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1519__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1519__$1,cljs.core.cst$kw$to);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1519__$1,cljs.core.cst$kw$address);
var topics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1519__$1,cljs.core.cst$kw$topics);
var block_hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1519__$1,cljs.core.cst$kw$block_DASH_hash);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1519__$1,cljs.core.cst$kw$on_DASH_success);
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1519__$1,cljs.core.cst$kw$on_DASH_failure);
var params = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$fromBlock,react_native_web.ethereum.logs.ensure_hex_bn(from),cljs.core.cst$kw$toBlock,react_native_web.ethereum.logs.ensure_hex_bn(to),cljs.core.cst$kw$address,address,cljs.core.cst$kw$topics,react_native_web.ethereum.logs.generate_topic(topics),cljs.core.cst$kw$blockhash,block_hash], null)], null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extensions_SLASH_send_DASH_async,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [react_native_web.ethereum.rpc_args("eth_getLogs",params,ethereum_addr),((function (params,map__1519,map__1519__$1,from,to,address,topics,block_hash,on_success,on_failure){
return (function (error,result){
return react_native_web.ethereum.rpc_dispatch(error,result,((function (params,map__1519,map__1519__$1,from,to,address,topics,block_hash,on_success,on_failure){
return (function (result__$1){
var results = react_native_web.ethereum.parse_call_result(result__$1,null);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0));

return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (results,params,map__1519,map__1519__$1,from,to,address,topics,block_hash,on_success,on_failure){
return (function (p1__1517_SHARP_){
return react_native_web.ethereum.logs.parse_log(react_native_web.ethereum.logs.flatten_input(topics),p1__1517_SHARP_);
});})(results,params,map__1519,map__1519__$1,from,to,address,topics,block_hash,on_success,on_failure))
,results);
});})(params,map__1519,map__1519__$1,from,to,address,topics,block_hash,on_success,on_failure))
,on_success,on_failure);
});})(params,map__1519,map__1519__$1,from,to,address,topics,block_hash,on_success,on_failure))
], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extensions_SLASH_ethereum_DASH_logs,(function (p__1521,p__1522){
var map__1523 = p__1521;
var map__1523__$1 = (((((!((map__1523 == null))))?(((((map__1523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1523):map__1523);
var map__1524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1523__$1,cljs.core.cst$kw$db);
var map__1524__$1 = (((((!((map__1524 == null))))?(((((map__1524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1524):map__1524);
var ethereum_addr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1524__$1,cljs.core.cst$kw$ethereum_DASH_addr);
var vec__1525 = p__1522;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1525,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1525,(1),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1525,(2),null);
if(cljs.core.truth_(ethereum_addr)){
return react_native_web.ethereum.logs.execute_get_logs(arguments$,ethereum_addr);
} else {
return null;
}
}));
