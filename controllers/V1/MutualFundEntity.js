/**
 * @description incorporated with SEC Fund Factsheet API 01
 */

const { response } = require("express");
const { fromExternalGetMutualFundEntity } = require("../../utils/SecApi");
const { DBUpsert, DBSelectAllColumnFromTable } = require("../../database/databaseLibs");

/**
 * @description Get all Mutual Fund Entities
 * @route GET /api/v1/entities
 * @access Public
 */
exports.getMutualFundEntity = async (req, res, next) => {
  try {
    let response = await DBSelectAllColumnFromTable('mutualFundEntity')
    return res.json({ success: true, data: response });
  } catch (error) {
    console.log(error.stack);
    return res.json({ success: false });
  }
};

/**
 * @description create a Mutual Fund Entities
 * @route POST /api/v1/create/entities
 * @access Private
 */
exports.postMutualFundEntity = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res.json({ success: false });
  }
};

/**
 * @description update a Mutual Fund Entities
 * @route PUT /api/v1/update/entities
 * @access Private
 */
exports.putMutualFundEntity = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res.json({ success: false });
  }
};

/**
 * @description delete a Mutual Fund Entities
 * @route DELETE /api/v1/update/entities
 * @access Private
 */
exports.deleteMutualFundEntity = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res.json({ success: false });
  }
};

/**
 * @description refetch all Mutual Fund Entities from SEC API
 * @route PATCH /api/v1/refetch/entities
 * @access Private
 */
exports.refetchMutualFundEntity = async (req, res, next) => {
  try {
    let response = await fromExternalGetMutualFundEntity()
    let result = await DBUpsert('mutualFundEntity', response, 'unique_id');
    console.log(result);
    //console.log(response);
    return res.json({ success: true, data: response });
  } catch (error) {
    console.log(error.stack);
    return res.json({ success: false });
  }
};
