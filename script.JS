
function showPromise(){
    return new Promise((result) => {
        setTimeout(() => {
            result('done')
        }, 2000);
    })
}
showPromise().then((result) => {
    console.log(result)
})

