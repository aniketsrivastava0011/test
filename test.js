function co(n, cb){
var w= 0;
if(n > 5){
    n = n-5;
    w = w+10;
(function rep(n,w){
    if(n<5){ 
        return cb(w);
    }
    w = w+8;
    n = n-5;
    rep(n,w);
})(n,w);
} 
}

co(43, function(r){
    console.log(r)
});
