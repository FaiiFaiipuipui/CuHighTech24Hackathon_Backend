const knex = require("knex");
const db = require("./db.js");
/**
 *
 * @type {import('../databaseType.d.ts');}
 */

exports.DBUpsert = async (tableName, insertObj, conflictToCheck) => {
  return await db(tableName)
    .insert(insertObj)
    .onConflict(conflictToCheck)
    .merge()
    .returning("*");
};

exports.DBSelectColFromTable = async () => {
  return await []
}

exports.DBSelectAllColumnFromTable = async (tableName) => {
  return await db(tableName)
    .select()
    .returning("*");
}

//TODO write function
/*
    const entitiesArray = await db("mutualFundEntity").select("unique_id");
    let fundsPromises = entitiesArray.map(entity => {
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            let result = await fromExternalGetFundFromThisMutualFundEntity(entity.unique_id);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, 1000);
      });
    });

    // Use Promise.all to wait for all promises to resolve
    Promise.all(fundsPromises)
      .then(results => {
        console.log(results); // This will be an array of results from fromExternalGetFundFromThisMutualFundEntity
        return res.json({ success: true, data: results });
      })
      .catch(error => {
        console.error(error);
      });
*/
