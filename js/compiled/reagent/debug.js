// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__3532__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__3532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3533__i = 0, G__3533__a = new Array(arguments.length -  0);
while (G__3533__i < G__3533__a.length) {G__3533__a[G__3533__i] = arguments[G__3533__i + 0]; ++G__3533__i;}
  args = new cljs.core.IndexedSeq(G__3533__a,0,null);
} 
return G__3532__delegate.call(this,args);};
G__3532.cljs$lang$maxFixedArity = 0;
G__3532.cljs$lang$applyTo = (function (arglist__3534){
var args = cljs.core.seq(arglist__3534);
return G__3532__delegate(args);
});
G__3532.cljs$core$IFn$_invoke$arity$variadic = G__3532__delegate;
return G__3532;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__3535__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__3535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3536__i = 0, G__3536__a = new Array(arguments.length -  0);
while (G__3536__i < G__3536__a.length) {G__3536__a[G__3536__i] = arguments[G__3536__i + 0]; ++G__3536__i;}
  args = new cljs.core.IndexedSeq(G__3536__a,0,null);
} 
return G__3535__delegate.call(this,args);};
G__3535.cljs$lang$maxFixedArity = 0;
G__3535.cljs$lang$applyTo = (function (arglist__3537){
var args = cljs.core.seq(arglist__3537);
return G__3535__delegate(args);
});
G__3535.cljs$core$IFn$_invoke$arity$variadic = G__3535__delegate;
return G__3535;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});