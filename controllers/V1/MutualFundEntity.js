/**
 * @description incorporated with SEC Fund Factsheet API 01
 */

/**
 * @description Get all Mutual Fund Entities
 * @route GET /api/v1/entities
 * @access Public
 */
exports.getMutualFundEntity = (req, res, next)=> {
  try {
    return res.json({success: true});
  } catch (error) {
    console.log(error.stack);
    return res.json({success: false});
  }
};

/**
 * @description create a Mutual Fund Entities
 * @route POST /api/v1/create/entities
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
 * @description update a Mutual Fund Entities
 * @route PUT /api/v1/update/entities
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
 * @description delete a Mutual Fund Entities
 * @route DELETE /api/v1/update/entities
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
 * @description refetch all Mutual Fund Entities from SEC API
 * @route PATCH /api/v1/refetch/entities
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