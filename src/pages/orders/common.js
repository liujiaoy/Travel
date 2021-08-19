    // 第四题：手动实现Promise
    class myPromise{
      constructor (handle){
        if(typeof handle !== "function"){
            throw new TypeError('Promise resolver ${executor} is not a function')
        }
        //记录状态和值的改变
        //初始化值
        this.value = null //终值
        this.reason = null //拒因
        this.state = 'pending' //状态
        const resolve = value =>{
          //成功后的一系列操作（状态的改变，成功回调的执行）
          if(this.state === 'pending'){
            //状态进行改变
            this.state = 'fulfilled'
            //执行成功的回调，把终值进行赋值
            this.value = value
          }
        }
        const reject = reason =>{
            //失败后的一系列操作（状态的改变，失败回调的执行）
            if(this.state === 'pending'){
                //状态进行改变
                this.state = 'rejected'
                //执行成功的回调，把据因进行赋值
                this.reason = reason
            }
        }
        executor(resolve,reject)
      }
    }