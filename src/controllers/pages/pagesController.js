var staticPages  = require('./staticPages')

module.exports = {
    get:{
        home:function(req,res){
            res.render('index',{
                page:"home"
            })
        },
        staticPages:async function(req,res){
            var req_page = req.params.page_name
            ,pageState = await staticPages.doesPageExist(req_page)
            if(pageState){
                
                    res.render(req_page,{},function(err,html){
                        if(err){
                            res.render('index',{
                                page:'404'
                            })
                        }else{
                            res.render('index',{
                                page:req_page
                            })
                        }
                    })

            }

            else{
                res.redirect('/')
            }
        }
    }

}