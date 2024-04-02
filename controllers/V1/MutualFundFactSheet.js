/**
 * @description incorporated with SEC Fund Factsheet API 04
 */

const { DBUpsert } = require("../../database/databaseLibs");
const { fromExternalGetFundFactSheetURL } = require("../../utils/SecApi");

/**
 * @description Get
 * @route GET /api/v1/read/fundfactsheet
 * @param proj_id
 * @access Public
 */
exports.getFundFactSheet = async (req, res, next) => {
  try {
    return res.json({ success: true, data: response });
  } catch (error) {
    console.log(error.stack);
    return res.status(500).json({ success: false });
  }
};

/**
 * @description create
 * @route POST /api/v1/create/fundfactsheet
 * @param proj_id
 * @access Private
 */
exports.postFundFactSheet = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res.status(500).json({ success: false });
  }
};

/**
 * @description update
 * @route PUT /api/v1/update/fundfactsheet
 * @param proj_id
 * @access Private
 */
exports.putFundFactSheet = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res.status(500).json({ success: false });
  }
};

/**
 * @description delete
 * @route DELETE /api/v1/update/fundfactsheet
 * @param proj_id
 * @access Private
 */
exports.deleteFundFactSheet = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res.status(500).json({ success: false });
  }
};

/**
 * @description refetch
 * @route PATCH /api/v1/refetch/fundfactsheet
 * @param proj_id
 * @access Private
 */
exports.refetchFundFactSheet = async (req, res, next) => {
  try {
    const secApiResponse = await fromExternalGetFundFactSheetURL(
      req.query.proj_id
    );
    console.log(secApiResponse);
    secApiResponse.proj_id = req.query.proj_id;
    const DBresponse = await DBUpsert("fundFactSheet", secApiResponse, [
      "proj_id",
      "last_upd_date",
    ]);
    console.log(DBresponse);
    return res.json({ success: true, data: DBresponse });
  } catch (error) {
    console.log(error.stack);
    return res.status(500).json({ success: false });
  }
};
