// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.errors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$errors_SLASH_type,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 37, [cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_block,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type_DASH_value,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_bindings,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_case_DASH_tests,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_reference,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_existing_DASH_key,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_unresolved_DASH_properties,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_case_DASH_expression,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_for_DASH_body,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_reference_DASH_type,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_if_DASH_block,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_reader_DASH_error,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_meta,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_component_DASH_property_DASH_type,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component_DASH_property,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_view,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_value,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_when_DASH_block,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_key,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_query,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_for_DASH_binding,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_bindings_DASH_format,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_placeholders,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_reference_DASH_arguments,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_reference,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_let_DASH_body,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_property_DASH_map,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_sequential_DASH_type,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type_DASH_name,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_assoc_DASH_type,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_event,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_local_DASH_event,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,"null",cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_property,"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 37, [cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_block,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type_DASH_value,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_bindings,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_case_DASH_tests,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_reference,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_existing_DASH_key,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_unsupported_DASH_test_DASH_type,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_destructuring_DASH_format,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_unresolved_DASH_properties,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_case_DASH_expression,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_for_DASH_body,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_reference_DASH_type,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_if_DASH_block,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_reader_DASH_error,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_meta,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_component_DASH_property_DASH_type,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component_DASH_property,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_view,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_value,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_when_DASH_block,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_key,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_query,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_for_DASH_binding,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_bindings_DASH_format,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_placeholders,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_reference_DASH_arguments,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_reference,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_let_DASH_body,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_property_DASH_map,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_sequential_DASH_type,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type_DASH_name,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_assoc_DASH_type,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_event,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_local_DASH_event,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_component,null,cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_property,null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$errors_SLASH_value,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$errors_SLASH_message,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$pluto$reader$errors_SLASH_error,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$reader$errors_SLASH_type,cljs.core.cst$kw$pluto$reader$errors_SLASH_value], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$reader$errors_SLASH_message], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__7158){
return cljs.core.map_QMARK_(G__7158);
}),(function (G__7158){
return cljs.core.contains_QMARK_(G__7158,cljs.core.cst$kw$pluto$reader$errors_SLASH_type);
}),(function (G__7158){
return cljs.core.contains_QMARK_(G__7158,cljs.core.cst$kw$pluto$reader$errors_SLASH_value);
})], null),(function (G__7158){
return ((cljs.core.map_QMARK_(G__7158)) && (cljs.core.contains_QMARK_(G__7158,cljs.core.cst$kw$pluto$reader$errors_SLASH_type)) && (cljs.core.contains_QMARK_(G__7158,cljs.core.cst$kw$pluto$reader$errors_SLASH_value)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$reader$errors_SLASH_message], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$reader$errors_SLASH_type,cljs.core.cst$kw$pluto$reader$errors_SLASH_value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$reader$errors_SLASH_type,cljs.core.cst$kw$pluto$reader$errors_SLASH_value], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$reader$errors_SLASH_type,cljs.core.cst$kw$pluto$reader$errors_SLASH_value], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$reader$errors_SLASH_message], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$pluto$reader$errors_SLASH_type)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$pluto$reader$errors_SLASH_value))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pluto$reader$errors_SLASH_message], null)])));
pluto.reader.errors.error = (function pluto$reader$errors$error(var_args){
var G__7160 = arguments.length;
switch (G__7160) {
case 2:
return pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2 = (function (type,o){
return pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3(type,o,cljs.core.PersistentArrayMap.EMPTY);
});

pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$3 = (function (type,o,m){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_type,type)){
} else {
throw (new Error("Assert failed: (spec/valid? :pluto.reader.errors/type type)"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$pluto$reader$errors_SLASH_type,type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pluto$reader$errors_SLASH_value,o], 0));
});

pluto.reader.errors.error.cljs$lang$maxFixedArity = 3;

pluto.reader.errors.accumulate_errors = (function pluto$reader$errors$accumulate_errors(m,s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,cljs.core.cst$kw$errors,cljs.core.concat,s);
});
pluto.reader.errors.merge_errors = (function pluto$reader$errors$merge_errors(m,errors){
var G__7162 = m;
if(cljs.core.seq(errors)){
return pluto.reader.errors.accumulate_errors(G__7162,errors);
} else {
return G__7162;
}
});
pluto.reader.errors.update_errors = (function pluto$reader$errors$update_errors(m,errors){
if(cljs.core.seq(errors)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,cljs.core.cst$kw$errors,cljs.core.concat,errors);
} else {
return m;
}
});
pluto.reader.errors.update_data = (function pluto$reader$errors$update_data(m,f,data){
if(cljs.core.truth_(data)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,cljs.core.cst$kw$data,f,data);
} else {
return m;
}
});
pluto.reader.errors.merge_result = (function pluto$reader$errors$merge_result(var_args){
var G__7164 = arguments.length;
switch (G__7164) {
case 2:
return pluto.reader.errors.merge_result.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pluto.reader.errors.merge_result.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pluto.reader.errors.merge_result.cljs$core$IFn$_invoke$arity$2 = (function (m,mm){
return pluto.reader.errors.merge_result.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,m,mm);
});

pluto.reader.errors.merge_result.cljs$core$IFn$_invoke$arity$3 = (function (f,m,p__7165){
var map__7166 = p__7165;
var map__7166__$1 = (((((!((map__7166 == null))))?(((((map__7166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7166):map__7166);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7166__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7166__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.update_errors(pluto.reader.errors.update_data(m,f,data),errors);
});

pluto.reader.errors.merge_result.cljs$lang$maxFixedArity = 3;

pluto.reader.errors.merge_results = (function pluto$reader$errors$merge_results(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7170 = arguments.length;
var i__4731__auto___7171 = (0);
while(true){
if((i__4731__auto___7171 < len__4730__auto___7170)){
args__4736__auto__.push((arguments[i__4731__auto___7171]));

var G__7172 = (i__4731__auto___7171 + (1));
i__4731__auto___7171 = G__7172;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

pluto.reader.errors.merge_results.cljs$core$IFn$_invoke$arity$variadic = (function (ms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pluto.reader.errors.merge_result,cljs.core.PersistentArrayMap.EMPTY,ms);
});

pluto.reader.errors.merge_results.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pluto.reader.errors.merge_results.cljs$lang$applyTo = (function (seq7169){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7169));
});

pluto.reader.errors.merge_results_with = (function pluto$reader$errors$merge_results_with(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7177 = arguments.length;
var i__4731__auto___7178 = (0);
while(true){
if((i__4731__auto___7178 < len__4730__auto___7177)){
args__4736__auto__.push((arguments[i__4731__auto___7178]));

var G__7179 = (i__4731__auto___7178 + (1));
i__4731__auto___7178 = G__7179;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pluto.reader.errors.merge_results_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

pluto.reader.errors.merge_results_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,ms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__7173_SHARP_,p2__7174_SHARP_){
return pluto.reader.errors.merge_result.cljs$core$IFn$_invoke$arity$3(f,p1__7173_SHARP_,p2__7174_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,ms);
});

pluto.reader.errors.merge_results_with.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pluto.reader.errors.merge_results_with.cljs$lang$applyTo = (function (seq7175){
var G__7176 = cljs.core.first(seq7175);
var seq7175__$1 = cljs.core.next(seq7175);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7176,seq7175__$1);
});

