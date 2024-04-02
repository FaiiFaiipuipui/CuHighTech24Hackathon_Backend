const { Router } = require('express');
const { refetchMutualFundEntity } = require("../../controllers/V1/MutualFundEntity");
const { refetchMutualFunds } = require('../../controllers/V1/MutualFundsGeneral');
const router = Router();

router.route("/entities").patch(refetchMutualFundEntity);
router.route('/funds').patch(refetchMutualFunds);

router.get("/", (req, res) => {
  res.status(200);
  res.send({ success: true });
});


module.exports = router;
