const { Router } = require('express');
const { refetchMutualFundEntity } = require("../../controllers/V1/MutualFundEntity");
const { refetchMutualFunds } = require('../../controllers/V1/MutualFundsGeneral');
const { refetchFundBenchmark } = require('../../controllers/V1/MutualFundBenchMark');
const { refetchFundFactSheet } = require('../../controllers/V1/MutualFundFactSheet');
const router = Router();

router.route("/entities").patch(refetchMutualFundEntity);
router.route('/fundfactsheet').patch(refetchFundFactSheet);
router.route('/funds').patch(refetchMutualFunds);
router.route('/benchmark').patch(refetchFundBenchmark);

router.get("/", (req, res) => {
  res.status(200);
  res.send({ success: true });
});


module.exports = router;
