

export class NPromise {
    success: Function = new Function();
    error: Function;
    final: Function;

    constructor(fun: Function) {

        fun((data: any) => {
            this.success(data);
            this.final();
        }, (error: any)=> {
            this.error(error);
            this.final()
        })
               return this;
    }

    resolve(data: any) {
        this.success(data);
        this.final()
    }
    reject(error: any) {
        //reject function
        this.error(error);
        this.final()
    }
    then(thenable) {
        this.success = thenable;
        return this;
    }
    catch(error) {
        this.error = error;
        return this
    }
    finally(final) {
        this.finally = final;
        return this;
    }

}
new NPromise((res, rej) => {
    setTimeout(() => {
        res(10)
    }, 1000)
}).then((data) => {
    console.log('data', data)
}).catch((error) => {
    console.log('error : ', error);
}).finally(() => {
    console.log('Done All')
})


function createStore(fn){
    let state;
    return {
         getState: function(){
             state = fn(state, {})
             return state;
         },
         dispatch: function(action){
             state = fn(state, action)
         }
     }
 }
 const reducer = function(state = 0, {type, payload}){
     switch(type){
         case 'INCREMENT':
             return state + payload
         case 'DECREMENT':
             return state - payload
     }
     return state
 }
 const store = createStore(reducer)
 ///////////////////////////////
 console.log(store.getState())
 store.dispatch({
   type: "INCREMENT",
   payload: 1
 })
 console.log(store.getState())
 store.dispatch({
   type: "DECREMENT",
   payload: 1
 })
 console.log(store.getState())