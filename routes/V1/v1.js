const { Router } = require('express');
const router = Router();

// Route files
const refetch = require("./refetch");

router.use("/refetch", refetch);

router.get("/", (req, res) => {
  res.status(200);
  res.send({ message: `This is the route for @version 1 of the API` });
});
/**
 * This is the route for @version 1 of the API
 */

/*
TODO: import SEC API
SEC API: https://api-portal.sec.or.th/
*/

/*
TODO: import FB API:
  https://developers.facebook.com/docs/features-reference/page-public-content-access
  https://developers.facebook.com/docs/features-reference/ad-targeting-data-access
  https://developers.facebook.com/docs/features-reference/page-public-metadata-access
*/

/**
 *
 */

module.exports = router;
