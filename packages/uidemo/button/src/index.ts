const ElButton = require('./button.vue') 

ElButton.install = function(Vue: any){
    Vue.component(ElButton.name, ElButton)
}

module.exports = ElButton