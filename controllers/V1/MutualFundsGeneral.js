/**
 * @description incorporated with SEC Fund Factsheet API 02
 */

/**
 * @description Get all Mutual Funds 
 * @route GET /api/v1/funds
 * @access Public
 */
exports.getMutualFund = (req, res, next)=> {
  try {
    return res.json({success: true});
  } catch (error) {
    console.log(error.stack);
    return res.json({success: false});
  }
};

/**
 * @description create a Mutual Fund
 * @route POST /api/v1/create/fund
 * @access Private
 */
exports.postMutualFundEntity = (req, res, next)=> {
  try {
    return res.json({success: true});
  } catch (error) {
    console.log(error.stack);
    return res.json({success: false});
  }
};

/**
 * @description update a Mutual Fund
 * @route PUT /api/v1/update/fund/:fundId
 * @access Private
 */
exports.postMutualFundEntity = (req, res, next)=> {
  try {
    return res.json({success: true});
  } catch (error) {
    console.log(error.stack);
    return res.json({success: false});
  }
};

/**
 * @description delete a Mutual Fund 
 * @route DELETE /api/v1/update/fund/:fundId
 * @access Private
 */
exports.postMutualFundEntity = (req, res, next)=> {
  try {
    return res.json({success: true});
  } catch (error) {
    console.log(error.stack);
    return res.json({success: false});
  }
};

/**
 * @description refetch all Mutual Fund from SEC API
 * @route PATCH /api/v1/refetch/fund
 * @access Private
 */
exports.refetchMutualFundEntity = (req, res, next)=> {
  try {
    return res.json({success: true});
  } catch (error) {
    console.log(error.stack);
    return res.json({success: false});
  }
};