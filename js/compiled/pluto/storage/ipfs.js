// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pluto.storage.ipfs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pluto.storage');
goog.require('pluto.storage.http');
pluto.storage.ipfs.infura_url = (function pluto$storage$ipfs$infura_url(hash){
return ["https://ipfs.infura.io/ipfs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');
});

/**
* @constructor
 * @implements {pluto.storage.Storage}
*/
pluto.storage.ipfs.IPFSStorage = (function (){
});
pluto.storage.ipfs.IPFSStorage.prototype.pluto$storage$Storage$ = cljs.core.PROTOCOL_SENTINEL;

pluto.storage.ipfs.IPFSStorage.prototype.pluto$storage$Storage$fetch$arity$3 = (function (_,p__2455,callback){
var self__ = this;
var map__2456 = p__2455;
var map__2456__$1 = (((((!((map__2456 == null))))?(((((map__2456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2456):map__2456);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2456__$1,cljs.core.cst$kw$value);
var ___$1 = this;
return pluto.storage.http.get_url(pluto.storage.ipfs.infura_url(value),callback);
});

pluto.storage.ipfs.IPFSStorage.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

pluto.storage.ipfs.IPFSStorage.cljs$lang$type = true;

pluto.storage.ipfs.IPFSStorage.cljs$lang$ctorStr = "pluto.storage.ipfs/IPFSStorage";

pluto.storage.ipfs.IPFSStorage.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"pluto.storage.ipfs/IPFSStorage");
});

/**
 * Positional factory function for pluto.storage.ipfs/IPFSStorage.
 */
pluto.storage.ipfs.__GT_IPFSStorage = (function pluto$storage$ipfs$__GT_IPFSStorage(){
return (new pluto.storage.ipfs.IPFSStorage());
});

