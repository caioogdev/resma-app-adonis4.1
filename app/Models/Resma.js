'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Resma extends Model {

    static get visible(){
        return [ 'user_id','nameRequester','IDRequester','baseRequester','resmaQTT'  ]
    }
}

module.exports = Resma
