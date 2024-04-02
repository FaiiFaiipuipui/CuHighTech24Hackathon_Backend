/**
 * @description incorporated with SEC Fund Factsheet API 02
 */

const { DBUpsert } = require("../../database/databaseLibs");
const db = require("../../database/db");
const {
  fromExternalGetFundFromThisMutualFundEntity,
} = require("../../utils/SecApi");

/**
 * @description Get all Mutual Funds
 * @route GET /api/v1/funds
 * @access Public
 */
exports.getMutualFund = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res.json({ success: false });
  }
};

/**
 * @description create a Mutual Fund
 * @route POST /api/v1/create/fund
 * @access Private
 */
exports.postMutualFunds = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res.json({ success: false });
  }
};

/**
 * @description update a Mutual Fund
 * @route PUT /api/v1/update/fund/:fundId
 * @access Private
 */
exports.postMutualFunds = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res.json({ success: false });
  }
};

/**
 * @description delete a Mutual Fund
 * @route DELETE /api/v1/update/fund/:fundId
 * @access Private
 */
exports.postMutualFunds = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res.json({ success: false });
  }
};

/**
 * @description refetch all Mutual Fund from SEC API
 * @route PATCH /api/v1/refetch/fund
 * @access Private
 */
exports.refetchMutualFunds = async (req, res, next) => {
  try {
    const entitiesArray = await db("mutualFundEntity").select("unique_id");
    for (const entities of entitiesArray) {
      let funds = await fromExternalGetFundFromThisMutualFundEntity(
        Object.values(entities)
      );
      funds = funds.map((fund) => {
        let newFund = {
          ...fund,
          managingMutualFundEntity: fund.unique_id,
        };
        delete newFund.unique_id
        return newFund;
      });
      console.log(funds);
      let upsertResult = await DBUpsert("funds", funds, "proj_id");
    }

    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res.json({ success: false });
  }
};
