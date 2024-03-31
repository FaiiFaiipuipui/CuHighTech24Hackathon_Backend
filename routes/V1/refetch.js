const { Router } = require('express');
const { refetchMutualFundEntity } = require("../../controllers/V1/MutualFundEntity");
const router = Router();

router.route("/entities").patch(refetchMutualFundEntity);

router.get("/", (req, res) => {
  res.status(200);
  res.send({ success: true });
});


module.exports = router;
