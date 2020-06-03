var db_reqMongoose = require('mongoose');
var db_shSchema = db_reqMongoose.Schema;
var db_shAngelInvestor = new db_shSchema({

    db_sRegionToInvest:
        [
            {
                sRegion: { type: String, required: true },
            }

        ],
    db_nCapitalProvided: { type: String, required: true },
    db_nMinInvestAmount: { type: Integer, required: true },
    db_nMaxInvestAmount: { type: Integer, required: true },
    db_sSectorToInvest:
        [
            {
                sSector: { type: Integer, required: true },
            }
        ],
    db_sCompanyStage: { type: String, required: true },


});

var db_modelAngelInvestor = db_reqMongoose.model('dbAngelInvestor', db_shAngelInvestor);
Module.exports = db_modelAngelInvestor;
