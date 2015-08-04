

function utils(){
    this.wrapResponse = function(retuenCode , data ,errMsg){
        return {"code":retuenCode,"data":data,"message":errMsg};
    }
}

module.exports = new utils();
