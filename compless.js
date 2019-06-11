const fs = require('fs')
const {exec} = require('child_process'),
watch_path = 'less/',
call  = {
    start:function(){
        console.log('[+++++++++++++++++++++++]')
        console.log('[+ LESS WATCHER V1.0.2 +]')
        console.log('[+++++++++++++++++++++++]')
        console.log('')
        console.log('[+] Watching less/*.less files...')
    },
    watch_handler: function(e,filename){
        if(e == "change"){
            console.log('[+] '+filename + " has been changed...")
            console.log("[+] compiling less...")
            exec('sh compless.sh',(err,stdout,stderr)=>{
                        if(err){
                            console.error('error',err)
                        }
                        else{
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