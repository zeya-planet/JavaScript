

export function deBounce (fn,wait) {
    // console.info('防抖',fn,wait)
    let timeout = null;

    return function (){
        // console.info('timeout',timeout)
        if(timeout !==null) clearTimeout(timeout);
        timeout=setTimeout(fn,wait);
    }
}
