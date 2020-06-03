var db_mongMongoose = require('mongoose');
var db_shSchema = db_mongMongoose.Schema;

var db_shUser = new db_shSchema({
	db_sName: {type:String,required:true},
	db_sEmail: {type:String,required:true,unique:true},
	db_nContactNumber: {type:Integer,required:true,unique:true},
	db_sCountryName: {type:String,required:true},
    db_sStateName: {type:String,required:true},
	db_sCityName: {type:String,required:true},
    db_nZipCode:{type:Integer,required:true}
            
});
var db_modelUser = mongoose.model('dbPersonalInfo',db_shUser);
module.exports = db_modelUser;
