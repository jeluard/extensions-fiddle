// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('pluto.error');
goog.require('pluto.log');
goog.require('pluto.reader.destructuring');
goog.require('pluto.reader.reference');
goog.require('pluto.reader.types');
goog.require('pluto.utils');
pluto.reader.events.interpolate = (function pluto$reader$events$interpolate(ctx,m,v){
var map__1696 = pluto.utils.interpolate(m,v);
var map__1696__$1 = (((((!((map__1696 == null))))?(((((map__1696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1696):map__1696);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1696__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1696__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errors)){
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$query_SLASH_interpolation,errors);
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
return (function (p1__1698_SHARP_,p2__1699_SHARP_){
var G__1700 = p1__1698_SHARP_;
var G__1701 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$a,p2__1699_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$env,env], null)], 0));
return (o.cljs$core$IFn$_invoke$arity$2 ? o.cljs$core$IFn$_invoke$arity$2(G__1700,G__1701) : o.call(null,G__1700,G__1701));
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
return cljs.core.reduce_kv((function (p1__1702_SHARP_,p2__1703_SHARP_,p3__1704_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__1702_SHARP_,p2__1703_SHARP_,pluto.reader.events.replace_atom(ctx,env,p3__1704_SHARP_));
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
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_invalid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reference], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$event,cljs.core.cst$kw$data,event], null))], null)], null);
}
});
/**
 * Dispatches an event using ctx
 */
pluto.reader.events.dispatch_events = (function pluto$reader$events$dispatch_events(p__1705,events,raw_QMARK_){
var map__1706 = p__1705;
var map__1706__$1 = (((((!((map__1706 == null))))?(((((map__1706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1706):map__1706);
var ctx = map__1706__$1;
var event_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1706__$1,cljs.core.cst$kw$event_DASH_fn);
if(cljs.core.seq(events)){
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_trace,cljs.core.cst$kw$event_SLASH_dispatch,events);

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
return pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_dispatch,cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Returns the final event vector
 */
pluto.reader.events.resolve_event = (function pluto$reader$events$resolve_event(ctx,ext,env,p__1708){
var vec__1709 = p__1708;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1709,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1709,(1),null);
var reference = vec__1709;
var map__1712 = pluto.reader.reference.resolve(ctx,ext,cljs.core.cst$kw$event,reference);
var map__1712__$1 = (((((!((map__1712 == null))))?(((((map__1712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1712):map__1712);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1712__$1,cljs.core.cst$kw$data);
var map__1713 = pluto.reader.events.resolve_arguments(ctx,ext,event,(function (){var or__4131__auto__ = args;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var map__1713__$1 = (((((!((map__1713 == null))))?(((((map__1713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1713):map__1713);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1713__$1,cljs.core.cst$kw$data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),pluto.reader.events.resolve_env(ctx,env,inline)], null);
});
pluto.reader.events.create_event = (function pluto$reader$events$create_event(ctx,ext,env,ref){
if(cljs.core.vector_QMARK_(ref)){
return pluto.reader.events.resolve_event(ctx,ext,env,ref);
} else {
var vec__1716 = ref;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1716,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1716,(1),null);
var if$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1716,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1716,(3),null);
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
pluto.reader.events.resolve_query = (function pluto$reader$events$resolve_query(p__1719,ext,query){
var map__1720 = p__1719;
var map__1720__$1 = (((((!((map__1720 == null))))?(((((map__1720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1720):map__1720);
var ctx = map__1720__$1;
var query_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1720__$1,cljs.core.cst$kw$query_DASH_fn);
var map__1722 = (function (){var G__1723 = ctx;
var G__1724 = ext;
var G__1725 = cljs.core.cst$kw$query;
var G__1726 = query;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__1723,G__1724,G__1725,G__1726) : pluto.reader.types.resolve.call(null,G__1723,G__1724,G__1725,G__1726));
})();
var map__1722__$1 = (((((!((map__1722 == null))))?(((((map__1722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1722):map__1722);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1722__$1,cljs.core.cst$kw$data);
if(cljs.core.truth_(query_fn)){
var temp__5457__auto__ = (query_fn.cljs$core$IFn$_invoke$arity$2 ? query_fn.cljs$core$IFn$_invoke$arity$2(ctx,data) : query_fn.call(null,ctx,data));
if(cljs.core.truth_(temp__5457__auto__)){
var signal = temp__5457__auto__;
var o = cljs.core.deref(signal);
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_trace,cljs.core.cst$kw$query_SLASH_resolve,o);

return o;
} else {
return null;
}
} else {
return null;
}
});
pluto.reader.events.merge_resolved_query = (function pluto$reader$events$merge_resolved_query(ctx,ext,m,p__1728){
var map__1729 = p__1728;
var map__1729__$1 = (((((!((map__1729 == null))))?(((((map__1729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1729):map__1729);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1729__$1,cljs.core.cst$kw$value);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1729__$1,cljs.core.cst$kw$bindings);
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
pluto.reader.events.event_dispatcher = (function pluto$reader$events$event_dispatcher(ctx,ext,refs,arguments$,p__1734){
var map__1735 = p__1734;
var map__1735__$1 = (((((!((map__1735 == null))))?(((((map__1735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1735):map__1735);
var queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1735__$1,cljs.core.cst$kw$queries);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1735__$1,cljs.core.cst$kw$properties);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.with_meta(((function (map__1735,map__1735__$1,queries,properties){
return (function (dynamic,p__1737){
var map__1738 = p__1737;
var map__1738__$1 = (((((!((map__1738 == null))))?(((((map__1738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1738):map__1738);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1738__$1,cljs.core.cst$kw$env);
var raw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1738__$1,cljs.core.cst$kw$raw_QMARK_);
var map__1740 = pluto.reader.destructuring.destructure(properties,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dynamic,arguments$], 0)));
var map__1740__$1 = (((((!((map__1740 == null))))?(((((map__1740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1740):map__1740);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1740__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1740__$1,cljs.core.cst$kw$errors);
if(cljs.core.seq(errors)){
pluto.log.fire_BANG_(ctx,cljs.core.cst$kw$pluto$log_SLASH_error,cljs.core.cst$kw$event_SLASH_destructuring,errors);
} else {
}

var env_SINGLEQUOTE_ = pluto.reader.events.resolve_env(ctx,env,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__1740,map__1740__$1,data,errors,map__1738,map__1738__$1,env,raw_QMARK_,map__1735,map__1735__$1,queries,properties){
return (function (p1__1731_SHARP_,p2__1732_SHARP_){
return pluto.reader.events.merge_resolved_query(ctx,ext,p1__1731_SHARP_,p2__1732_SHARP_);
});})(map__1740,map__1740__$1,data,errors,map__1738,map__1738__$1,env,raw_QMARK_,map__1735,map__1735__$1,queries,properties))
,data,queries)], 0)));
return pluto.reader.events.dispatch_events(ctx,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (env_SINGLEQUOTE_,map__1740,map__1740__$1,data,errors,map__1738,map__1738__$1,env,raw_QMARK_,map__1735,map__1735__$1,queries,properties){
return (function (p1__1733_SHARP_){
return pluto.reader.events.create_event(ctx,ext,env_SINGLEQUOTE_,p1__1733_SHARP_);
});})(env_SINGLEQUOTE_,map__1740,map__1740__$1,data,errors,map__1738,map__1738__$1,env,raw_QMARK_,map__1735,map__1735__$1,queries,properties))
,refs),raw_QMARK_);
});})(map__1735,map__1735__$1,queries,properties))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,true], null))], null);
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
var vec__1745 = o;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1745,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1745,(1),null);
var if$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1745,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1745,(3),null);
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
var vec__1748 = data;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1748,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1748,(1),null);
return ((((2) < cljs.core.count(data))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$let,form)) && (cljs.core.even_QMARK_(cljs.core.count(bindings))) && (cljs.core.map_QMARK_(cljs.core.first(bindings))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$properties,cljs.core.second(bindings))) && (cljs.core.every_QMARK_(pluto.reader.events.event_QMARK_,pluto.reader.events.references(data))));
} else {
return null;
}
});
pluto.reader.events.merge_pair = (function pluto$reader$events$merge_pair(m,p__1751){
var vec__1752 = p__1751;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1752,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1752,(1),null);
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
pluto.reader.events.parse = (function pluto$reader$events$parse(ctx,ext,p__1755,arguments$){
var vec__1756 = p__1755;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1756,(0),null);
var let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1756,(1),null);
var local = vec__1756;
if(cljs.core.truth_(pluto.reader.events.local_event_QMARK_(local))){
return pluto.reader.events.event_dispatcher(ctx,ext,pluto.reader.events.references(local),arguments$,pluto.reader.events.parse_let_bindings(let_bindings));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_invalid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$local_DASH_event], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,local], null))], null)], null);
}
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$event,(function (ctx,ext,_,p__1759){
var vec__1760 = p__1759;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1760,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1760,(1),null);
var value = vec__1760;
var map__1763 = pluto.reader.reference.resolve(ctx,ext,cljs.core.cst$kw$event,value);
var map__1763__$1 = (((((!((map__1763 == null))))?(((((map__1763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1763):map__1763);
var m = map__1763__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1763__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1763__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(data)?(((data instanceof cljs.core.Keyword))?pluto.reader.events.event_dispatcher(ctx,ext,(new cljs.core.List(null,value,null,(1),null)),arguments$,null):pluto.reader.events.parse(ctx,ext,data,arguments$)):null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.error.syntax.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$pluto$error_SLASH_unknown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$event], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,cljs.core.symbol], null))], null),errors)], null):null)], 0));
} else {
return m;
}
}));
