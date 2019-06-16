const fs = require('fs')
const {exec} = require('child_process'),
watch_path = 'styles/',
call  = {
    start:function(){
        console.log('[+++++++++++++++++++++++]')
        console.log('[+ LESS WATCHER V1.0.2 +]')
        console.log('[+++++++++++++++++++++++]')
        console.log('')
        console.log('[+] Watching styles/*.less files...')
    },
    watch_handler: function(e,filename){
        if(e == "change"){
            console.log('[+] '+filename + " has been changed...")
            exec('sh compless.sh',(err,stdout,stderr)=>{
                        if(err){
                            console.log('an error occurred:')
                            console.error('error',err)
                        }
                        else if(stderr){
                            console.log("Found Errors in your less:")
                            console.log(stderr)
                        }
                        else{
                            console.log(stdout)
                            console.log('[+] Files updated....resuming watch...')
                        }
            })
        }     
    }
}

call.start()

fs.watch(watch_path,{
    persistent:true,
    recursive:true
}, call.watch_handler)
