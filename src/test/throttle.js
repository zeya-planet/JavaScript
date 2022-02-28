

export function throttle (fn,wait) {
    var timeout = null;

    return function () {
        var context = this;
        var args  = arguments;

        if(!timeout){
            timeout=setTimeout(()=>{
                timeout=null;
                fn.apply(context,args)
            },wait)
        }

    }
}