/**
 * @description a template for controller file
 * replace {LINKENDER} and {OBJECTNAME}
 */

/**
 * @description Get 
 * @route GET /api/v1/read/LINKENDER
 * @access Public
 */
exports.getOBJECTNAME = async (req, res, next) => {
  try {
    return res.json({ success: true, data: response });
  } catch (error) {
    console.log(error.stack);
    return res
    .status(500)
    .json({ success: false });
  }
};

/**
 * @description create 
 * @route POST /api/v1/create/LINKENDER
 * @access Private
 */
exports.postOBJECTNAME = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res
    .status(500)
    .json({ success: false });
  }
};

/**
 * @description update 
 * @route PUT /api/v1/update/LINKENDER
 * @access Private
 */
exports.putOBJECTNAME = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res
    .status(500)
    .json({ success: false });
  }
};

/**
 * @description delete 
 * @route DELETE /api/v1/update/LINKENDER
 * @access Private
 */
exports.deleteOBJECTNAME = (req, res, next) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.log(error.stack);
    return res
    .status(500)
    .json({ success: false });
  }
};

/**
 * @description refetch 
 * @route PATCH /api/v1/refetch/LINKENDER
 * @access Private
 */
exports.refetchOBJECTNAME = async (req, res, next) => {
  try {
    return res.json({ success: true, data: response });
  } catch (error) {
    console.log(error.stack);
    return res
    .status(500)
    .json({ success: false });
  }
};
