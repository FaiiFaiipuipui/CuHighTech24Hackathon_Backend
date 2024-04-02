/**
 * @description incorporated with SEC Fund Factsheet API 18
 */

const { DBUpsert } = require("../../database/databaseLibs");
const { fromExternalGetFundBenchmark } = require("../../utils/SecApi");

/**
 * @description Get
 * @route GET /api/v1/read/benchmark
 * @param proj_id
 * @access Public
 */
exports.getFundBenchmark = async (req, res, next) => {
  try {
    return res.json({ success: true, data: response });
  } catch (error) {
    console.log(error.stack);
    return res.status(500).json({ success: false });
  }
};

/**
 * @description create
 * @route POST /api/v1/create/benchmark
 * @param proj_id
 * @access Private
 */
exports.postFundBenchmark = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res.status(500).json({ success: false });
  }
};

/**
 * @description update
 * @route PUT /api/v1/update/benchmark
 * @param proj_id
 * @access Private
 */
exports.putFundBenchmark = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res.status(500).json({ success: false });
  }
};

/**
 * @description delete
 * @route DELETE /api/v1/update/benchmark
 * @param proj_id
 * @access Private
 */
exports.deleteFundBenchmark = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res.status(500).json({ success: false });
  }
};

/**
 * @description refetch
 * @route PATCH /api/v1/refetch/benchmark
 * @param proj_id
 * @access Private
 */
exports.refetchFundBenchmark = async (req, res, next) => {
  try {
    const secApiResponse = await fromExternalGetFundBenchmark(
      req.query.proj_id
    );
    console.log(secApiResponse);
    const DBresponse = await DBUpsert("fundBenchmark", secApiResponse, [
      "proj_id",
      "last_upd_date",
    ]);
    console.log(DBresponse);
    return res.json({ success: true, data: DBresponse });
  } catch (error) {
    console.log(error.stack);
    return res.status(500).json({ success: false,  });
  }
};