const { Router } = require('express');
const { getMutualFundEntity } = require('../../controllers/V1/MutualFundEntity');
const router = Router();

router.route('/entities').get(getMutualFundEntity);

router.get("/", (req, res) => {
  res.status(200);
  res.send({ success: true });
});

module.exports = router;