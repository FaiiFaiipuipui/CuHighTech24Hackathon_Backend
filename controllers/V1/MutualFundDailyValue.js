/**
 * @description incorporated with SEC Fund Daily Info API 01
 */

/**
 * @description Get a Mutual Fund YTD daily info
 * @route GET /api/v1/funds/:fundId/value/ytd
 * @access Public
 */
exports.getMutualFund = (req, res, next)=> {
  try {
    return res.json({success: true});
  } catch (error) {
    console.log(error.stack);
    return res
    .status(500)
    .json({ success: false });
  }
};

/**
 * @description Get a Mutual Funds 5 years daily info 
 * @route GET /api/v1/funds/:fundId/value/five-year/:yearStart
 * @access Public
 */
exports.getMutualFund = (req, res, next)=> {
  try {
    return res.json({success: true});
  } catch (error) {
    console.log(error.stack);
    return res
    .status(500)
    .json({ success: false });
  }
};

/**
 * @description Get a Mutual Funds 3 years daily info 
 * @route GET /api/v1/funds/:fundId/value/three-year/:yearStart
 * @access Public
 */
exports.getMutualFund = (req, res, next)=> {
  try {
    return res.json({success: true});
  } catch (error) {
    console.log(error.stack);
    return res
    .status(500)
    .json({ success: false });
  }
};

/**
 * @description Get a Mutual Funds 1 years daily info 
 * @route GET /api/v1/funds/:fundId/value/year/:year
 * @access Public
 */
exports.getMutualFund = (req, res, next)=> {
  try {
    return res.json({success: true});
  } catch (error) {
    console.log(error.stack);
    return res
    .status(500)
    .json({ success: false });
  }
};

/**
 * @description Get a Mutual Funds 6 months daily info
 * @route GET /api/v1/funds/:fundId/value/half
 * @access public
 * 
 * @param year
 * @param halfIndicator
 */
exports.getMutualFund = (req, res, next)=> {
  try {
    return res.json({success: true});
  } catch (error) {
    console.log(error.stack);
    return res
    .status(500)
    .json({ success: false });
  }
};

/**
 * @description Get a Mutual Funds daily info by month
 * @route GET /api/v1/funds/:fundId/value/month
 * @access Public
 * 
 * @param year
 * @param monthIndicator
 */
exports.getMutualFund = (req, res, next)=> {
  try {
    return res.json({success: true});
  } catch (error) {
    console.log(error.stack);
    return res
    .status(500)
    .json({ success: false });
  }
};

/**
 * @description refetch a Mutual Fund Daily value by date from SEC API
 * @route PATCH /api/v1/refetch/fund/value/refetch/:day
 * @access Private
 */
exports.refetchMutualFundEntity = (req, res, next)=> {
  try {
    return res.json({success: true});
  } catch (error) {
    console.log(error.stack);
    return res
    .status(500)
    .json({ success: false });
  }
};