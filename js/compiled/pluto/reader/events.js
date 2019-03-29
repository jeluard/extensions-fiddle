// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('pluto.reader.destructuring');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.reference');
goog.require('pluto.reader.types');
goog.require('pluto.trace');
goog.require('pluto.utils');
pluto.reader.events.interpolate = (function pluto$reader$events$interpolate(ctx,m,v){
var map__7254 = pluto.utils.interpolate(m,v);
var map__7254__$1 = (((((!((map__7254 == null))))?(((((map__7254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7254):map__7254);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7254__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7254__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return pluto.trace.trace(ctx,pluto.trace.create_trace(cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_interpolation,errors));
} else {
return data;
}
});
pluto.reader.events.replace_atom = (function pluto$reader$events$replace_atom(ctx,env,o){
if(cljs.core.contains_QMARK_(env,o)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,o);
} else {
if((o instanceof cljs.core.Symbol)){
return null;
} else {
if(typeof o === 'string'){
return pluto.reader.events.interpolate(ctx,env,o);
} else {
if(cljs.core.fn_QMARK_(o)){
return (function (p1__7256_SHARP_,p2__7257_SHARP_){
var G__7258 = p1__7256_SHARP_;
var G__7259 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$a,p2__7257_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$env,env], null)], 0));
return (o.cljs$core$IFn$_invoke$arity$2 ? o.cljs$core$IFn$_invoke$arity$2(G__7258,G__7259) : o.call(null,G__7258,G__7259));
});
} else {
return clojure.walk.postwalk_replace(env,o);

}
}
}
}
});
/**
 * Resolve pairs from `env` in `m`.
 * Uses #replace-atom to perform the resolution.
 */
pluto.reader.events.resolve_env = (function pluto$reader$events$resolve_env(ctx,env,m){
return cljs.core.reduce_kv((function (p1__7260_SHARP_,p2__7261_SHARP_,p3__7262_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__7260_SHARP_,p2__7261_SHARP_,pluto.reader.events.replace_atom(ctx,env,p3__7262_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * Resolve an event arguments based on event definition
 */
pluto.reader.events.resolve_arguments = (function pluto$reader$events$resolve_arguments(ctx,ext,event,arguments$){
var temp__5455__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$events,event,cljs.core.cst$kw$arguments], null));
if(cljs.core.truth_(temp__5455__auto__)){
var type = temp__5455__auto__;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,arguments$) : pluto.reader.types.resolve.call(null,ctx,ext,type,arguments$));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_reference_DASH_arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$event,cljs.core.cst$kw$value,event], null))], null)], null);
}
});
/**
 * Dispatches an event using ctx
 */
pluto.reader.events.dispatch_events = (function pluto$reader$events$dispatch_events(p__7263,events,raw_QMARK_){
var map__7264 = p__7263;
var map__7264__$1 = (((((!((map__7264 == null))))?(((((map__7264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7264):map__7264);
var ctx = map__7264__$1;
var event_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7264__$1,cljs.core.cst$kw$event_DASH_fn);
if(cljs.core.seq(events)){
pluto.trace.trace(ctx,pluto.trace.create_trace(cljs.core.cst$kw$log,cljs.core.cst$kw$event_SLASH_dispatch,events));

if(cljs.core.truth_(raw_QMARK_)){
return events;
} else {
if(cljs.core.truth_(event_fn)){
return (event_fn.cljs$core$IFn$_invoke$arity$2 ? event_fn.cljs$core$IFn$_invoke$arity$2(ctx,events) : event_fn.call(null,ctx,events));
} else {
return null;
}
}
} else {
return pluto.trace.trace(ctx,pluto.trace.create_trace(cljs.core.cst$kw$error,cljs.core.cst$kw$event_SLASH_dispatch,cljs.core.PersistentArrayMap.EMPTY));
}
});
/**
 * Returns the final event vector
 */
pluto.reader.events.resolve_event = (function pluto$reader$events$resolve_event(ctx,ext,env,p__7266){
var vec__7267 = p__7266;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7267,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7267,(1),null);
var reference = vec__7267;
var map__7270 = pluto.reader.reference.resolve(ctx,ext,cljs.core.cst$kw$event,reference);
var map__7270__$1 = (((((!((map__7270 == null))))?(((((map__7270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7270):map__7270);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7270__$1,cljs.core.cst$kw$data);
var map__7271 = pluto.reader.events.resolve_arguments(ctx,ext,event,(function (){var or__4131__auto__ = args;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var map__7271__$1 = (((((!((map__7271 == null))))?(((((map__7271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7271):map__7271);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7271__$1,cljs.core.cst$kw$data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),pluto.reader.events.resolve_env(ctx,env,inline)], null);
});
pluto.reader.events.create_event = (function pluto$reader$events$create_event(ctx,ext,env,ref){
if(cljs.core.vector_QMARK_(ref)){
return pluto.reader.events.resolve_event(ctx,ext,env,ref);
} else {
var vec__7274 = ref;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7274,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7274,(1),null);
var if$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7274,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7274,(3),null);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,test))){
return pluto.reader.events.resolve_event(ctx,ext,env,if$);
} else {
return pluto.reader.events.resolve_event(ctx,ext,env,else$);
}

}
});
/**
 * Resolve a query using ctx
 */
pluto.reader.events.resolve_query = (function pluto$reader$events$resolve_query(p__7277,ext,query){
var map__7278 = p__7277;
var map__7278__$1 = (((((!((map__7278 == null))))?(((((map__7278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7278):map__7278);
var ctx = map__7278__$1;
var query_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7278__$1,cljs.core.cst$kw$query_DASH_fn);
var map__7280 = (function (){var G__7281 = ctx;
var G__7282 = ext;
var G__7283 = cljs.core.cst$kw$query;
var G__7284 = query;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__7281,G__7282,G__7283,G__7284) : pluto.reader.types.resolve.call(null,G__7281,G__7282,G__7283,G__7284));
})();
var map__7280__$1 = (((((!((map__7280 == null))))?(((((map__7280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7280):map__7280);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7280__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(query_fn)){
var temp__5457__auto__ = (query_fn.cljs$core$IFn$_invoke$arity$2 ? query_fn.cljs$core$IFn$_invoke$arity$2(ctx,data) : query_fn.call(null,ctx,data));
if(cljs.core.truth_(temp__5457__auto__)){
var signal = temp__5457__auto__;
var o = cljs.core.deref(signal);
pluto.trace.trace(ctx,pluto.trace.create_trace(cljs.core.cst$kw$log,cljs.core.cst$kw$query_SLASH_resolve,o));

return o;
} else {
return null;
}
} else {
return null;
}
});
pluto.reader.events.merge_resolved_query = (function pluto$reader$events$merge_resolved_query(ctx,ext,m,p__7286){
var map__7287 = p__7286;
var map__7287__$1 = (((((!((map__7287 == null))))?(((((map__7287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7287):map__7287);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7287__$1,cljs.core.cst$kw$value);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7287__$1,cljs.core.cst$kw$bindings);
if(cljs.core.map_QMARK_(bindings)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.reader.destructuring.destructure(bindings,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,pluto.reader.events.resolve_query(ctx,ext,value)], 0))))], 0));
} else {
if((bindings instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,bindings,pluto.reader.events.resolve_query(ctx,ext,value));
} else {
return null;
}
}
});
/**
 * Returns a function of 2 arguments 
 */
pluto.reader.events.event_dispatcher = (function pluto$reader$events$event_dispatcher(ctx,ext,refs,arguments$,p__7292){
var map__7293 = p__7292;
var map__7293__$1 = (((((!((map__7293 == null))))?(((((map__7293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7293):map__7293);
var queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7293__$1,cljs.core.cst$kw$queries);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7293__$1,cljs.core.cst$kw$properties);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.with_meta(((function (map__7293,map__7293__$1,queries,properties){
return (function (dynamic,p__7295){
var map__7296 = p__7295;
var map__7296__$1 = (((((!((map__7296 == null))))?(((((map__7296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7296):map__7296);
var all = map__7296__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7296__$1,cljs.core.cst$kw$env);
var raw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7296__$1,cljs.core.cst$kw$raw_QMARK_);
var map__7298 = pluto.reader.destructuring.destructure(properties,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dynamic,arguments$], 0)));
var map__7298__$1 = (((((!((map__7298 == null))))?(((((map__7298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7298):map__7298);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7298__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7298__$1,cljs.core.cst$kw$errors);
if(cljs.core.seq(errors)){
pluto.trace.trace(ctx,pluto.trace.create_trace(cljs.core.cst$kw$error,cljs.core.cst$kw$event_SLASH_destructuring,errors));
} else {
}

var env_SINGLEQUOTE_ = pluto.reader.events.resolve_env(ctx,env,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__7298,map__7298__$1,data,errors,map__7296,map__7296__$1,all,env,raw_QMARK_,map__7293,map__7293__$1,queries,properties){
return (function (p1__7289_SHARP_,p2__7290_SHARP_){
return pluto.reader.events.merge_resolved_query(ctx,ext,p1__7289_SHARP_,p2__7290_SHARP_);
});})(map__7298,map__7298__$1,data,errors,map__7296,map__7296__$1,all,env,raw_QMARK_,map__7293,map__7293__$1,queries,properties))
,data,queries)], 0)));
return pluto.reader.events.dispatch_events(ctx,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (env_SINGLEQUOTE_,map__7298,map__7298__$1,data,errors,map__7296,map__7296__$1,all,env,raw_QMARK_,map__7293,map__7293__$1,queries,properties){
return (function (p1__7291_SHARP_){
return pluto.reader.events.create_event(ctx,ext,env_SINGLEQUOTE_,p1__7291_SHARP_);
});})(env_SINGLEQUOTE_,map__7298,map__7298__$1,data,errors,map__7296,map__7296__$1,all,env,raw_QMARK_,map__7293,map__7293__$1,queries,properties))
,refs),raw_QMARK_);
});})(map__7293,map__7293__$1,queries,properties))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,true], null))], null),null);
});
/**
 * Returns a list of local event references
 */
pluto.reader.events.references = (function pluto$reader$events$references(data){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),data);
});
pluto.reader.events.if_block_QMARK_ = (function pluto$reader$events$if_block_QMARK_(o){
var and__4120__auto__ = cljs.core.list_QMARK_(o);
if(and__4120__auto__){
var vec__7303 = o;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7303,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7303,(1),null);
var if$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7303,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7303,(3),null);
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$if,s);
if(and__4120__auto____$1){
var and__4120__auto____$2 = (test instanceof cljs.core.Symbol);
if(and__4120__auto____$2){
var and__4120__auto____$3 = pluto.reader.reference.reference_QMARK_(if$);
if(cljs.core.truth_(and__4120__auto____$3)){
var and__4120__auto____$4 = else$;
if(cljs.core.truth_(and__4120__auto____$4)){
return pluto.reader.reference.reference_QMARK_(else$);
} else {
return and__4120__auto____$4;
}
} else {
return and__4120__auto____$3;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
pluto.reader.events.event_QMARK_ = (function pluto$reader$events$event_QMARK_(o){
var or__4131__auto__ = pluto.reader.reference.reference_QMARK_(o);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pluto.reader.events.if_block_QMARK_(o);
}
});
/**
 * A local event must define a let block and have a single destructuring binding accessing 'properties.
 */
pluto.reader.events.local_event_QMARK_ = (function pluto$reader$events$local_event_QMARK_(data){
if(cljs.core.list_QMARK_(data)){
var vec__7306 = data;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7306,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7306,(1),null);
return ((((2) < cljs.core.count(data))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$let,form)) && (cljs.core.even_QMARK_(cljs.core.count(bindings))) && (cljs.core.map_QMARK_(cljs.core.first(bindings))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$properties,cljs.core.second(bindings))) && (cljs.core.every_QMARK_(pluto.reader.events.event_QMARK_,pluto.reader.events.references(data))));
} else {
return null;
}
});
pluto.reader.events.merge_pair = (function pluto$reader$events$merge_pair(m,p__7309){
var vec__7310 = p__7309;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7310,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7310,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$sym$properties)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$properties,k);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,cljs.core.cst$kw$queries,cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,v,cljs.core.cst$kw$bindings,k], null)], null));

}
});
pluto.reader.events.parse_let_bindings = (function pluto$reader$events$parse_let_bindings(bindings){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pluto.reader.events.merge_pair,cljs.core.PersistentArrayMap.EMPTY,pairs);
});
/**
 * Parses local references defining let blocks
 */
pluto.reader.events.parse = (function pluto$reader$events$parse(ctx,ext,p__7313,arguments$){
var vec__7314 = p__7313;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7314,(0),null);
var let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7314,(1),null);
var local = vec__7314;
if(cljs.core.truth_(pluto.reader.events.local_event_QMARK_(local))){
return pluto.reader.events.event_dispatcher(ctx,ext,pluto.reader.events.references(local),arguments$,pluto.reader.events.parse_let_bindings(let_bindings));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_local_DASH_event,local)], null)], null);
}
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$event,(function (ctx,ext,_,p__7317){
var vec__7318 = p__7317;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7318,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7318,(1),null);
var value = vec__7318;
var map__7321 = pluto.reader.reference.resolve(ctx,ext,cljs.core.cst$kw$event,value);
var map__7321__$1 = (((((!((map__7321 == null))))?(((((map__7321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7321):map__7321);
var m = map__7321__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7321__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7321__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(data)?(((data instanceof cljs.core.Keyword))?pluto.reader.events.event_dispatcher(ctx,ext,(new cljs.core.List(null,value,null,(1),null)),arguments$,null):pluto.reader.events.parse(ctx,ext,data,arguments$)):null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_event,cljs.core.symbol)], null),errors)], null):null)], 0));
} else {
return m;
}
}));
