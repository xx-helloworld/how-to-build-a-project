const ElButtonInDemo = require('./button-in-demo.vue') 

ElButtonInDemo.install = function(Vue: any){
    Vue.component(ElButtonInDemo.name, ElButtonInDemo)
}

module.exports = ElButtonInDemo