require('dotenv').config()

/**
 * @summary get information from Fund Factsheet API 01. รายชื่อ บลจ.
 */
module.exports.fromExternalGetMutualFundEntity = async function () {
  const TIMEOUT = 5000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), TIMEOUT);

  return fetch("https://api.sec.or.th/FundFactsheet/fund/amc", {
    method: "GET",
    signal: controller.signal,
    headers: {
      "Cache-Control": "no-cache",
      "Ocp-Apim-Subscription-Key": process.env.CUHighTech24_BackEnd_FundFactsheet_PrimaryAPIKey,
    },
  })
    .then((response) => {
      clearTimeout(id);
      if (!response.ok) {
        throw new Error("fromExternalGetMutualFundEntity failed.");
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};

/**
 * @summary get information from Fund Factsheet API 02. กองทุนภายใต้การบริหารจัดการของบลจ.
 */
module.exports.fromExternalGetFundFromThisMutualFundEntity = async function (
  MutualFundEntity
) {
  const TIMEOUT = 5000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), TIMEOUT);

  return fetch(`https://api.sec.or.th/FundFactsheet/fund/amc/${MutualFundEntity}`, {
    method: "GET",
    signal: controller.signal,
    headers: {
      "Cache-Control": "no-cache",
      "Ocp-Apim-Subscription-Key":
        process.env.CUHighTech24_BackEnd_FundFactsheet_PrimaryAPIKey,
    },
  })
    .then((response) => {
      clearTimeout(id);
      if (!response.ok) {
        throw new Error("fromExternalGetFundFromThisMutualFundEntity failed.");
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};

/**
 * @summary get information from Fund Factsheet API 04. URL ของ Fact Sheet และรายงานประจำปีของกองทุน
 */
module.exports.fromExternalGetFundFactSheetURL = async function (proj_id) {
  const TIMEOUT = 5000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), TIMEOUT);

  return fetch(`https://api.sec.or.th/FundFactsheet/fund/${proj_id}/URLs`, {
    method: "GET",
    signal: controller.signal,
    headers: {
      "Cache-Control": "no-cache",
      "Ocp-Apim-Subscription-Key":
        process.env.CUHighTech24_BackEnd_FundFactsheet_PrimaryAPIKey,
    },
  })
    .then((response) => {
      clearTimeout(id);
      if (!response.ok) {
        throw new Error("fromExternalGetFundFactSheetURL failed.");
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};

/**
 * @summary get information from Fund Factsheet API 07. ลักษณะและอายุโครงการ
 */
module.exports.fromExternalGetFundProjectInfo = async function (proj_id) {
  const TIMEOUT = 5000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), TIMEOUT);

  return fetch(`https://api.sec.or.th/FundFactsheet/fund/${proj_id}/project_type`, {
    method: "GET",
    signal: controller.signal,
    headers: {
      "Cache-Control": "no-cache",
      "Ocp-Apim-Subscription-Key":
        process.env.CUHighTech24_BackEnd_FundFactsheet_PrimaryAPIKey,
    },
  })
    .then((response) => {
      clearTimeout(id);
      if (!response.ok) {
        throw new Error("fromExternalGetFundProjectInfo failed.");
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};

/**
 * @summary get information from Fund Factsheet API 08. ประเภทกองทุนตามนโยบายกองทุน
 */
module.exports.fromExternalGetFundPolicies = async function (proj_id) {
  const TIMEOUT = 5000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), TIMEOUT);

  return fetch(`https://api.sec.or.th/FundFactsheet/fund/${proj_id}/policy`, {
    method: "GET",
    signal: controller.signal,
    headers: {
      "Cache-Control": "no-cache",
      "Ocp-Apim-Subscription-Key":
        process.env.CUHighTech24_BackEnd_FundFactsheet_PrimaryAPIKey,
    },
  })
    .then((response) => {
      clearTimeout(id);
      if (!response.ok) {
        throw new Error("fromExternalGetFundPolicies failed.");
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};

/**
 * @summary get information from Fund Factsheet API 12. ความเหมาะสมกับผู้ลงทุนและความเสี่ยงของกองทุน
 */
module.exports.fromExternalGetFundSuitability = async function (proj_id) {
  const TIMEOUT = 5000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), TIMEOUT);

  return fetch(`https://api.sec.or.th/FundFactsheet/fund/${proj_id}/suitability`, {
    method: "GET",
    signal: controller.signal,
    headers: {
      "Cache-Control": "no-cache",
      "Ocp-Apim-Subscription-Key":
        process.env.CUHighTech24_BackEnd_FundFactsheet_PrimaryAPIKey,
    },
  })
    .then((response) => {
      clearTimeout(id);
      if (!response.ok) {
        throw new Error("fromExternalGetFundSuitability failed.");
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};

/**
 * @summary get information from Fund Factsheet API 18. ดัชนีชี้วัดกองทุน
 */
module.exports.fromExternalGetFundBenchmark = async function (proj_id) {
  const TIMEOUT = 5000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), TIMEOUT);

  return fetch(`https://api.sec.or.th/FundFactsheet/fund/${proj_id}/benchmark`, {
    method: "GET",
    signal: controller.signal,
    headers: {
      "Cache-Control": "no-cache",
      "Ocp-Apim-Subscription-Key":
        process.env.CUHighTech24_BackEnd_FundFactsheet_PrimaryAPIKey,
    },
  })
    .then((response) => {
      clearTimeout(id);
      if (!response.ok) {
        throw new Error("fromExternalGetFundBenchmark failed.");
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};

/**
 * @summary get information from Fund Daily Info API 01. NAV กองทุนรวมรายวัน
 */
module.exports.fromExternalGetFundNAV = async function (proj_id, nav_date) {
  const TIMEOUT = 5000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), TIMEOUT);

  return fetch(`https://api.sec.or.th/FundDailyInfo/${proj_id}/dailynav/${nav_date}`, {
    method: "GET",
    signal: controller.signal,
    headers: {
      "Cache-Control": "no-cache",
      "Ocp-Apim-Subscription-Key":
        process.env.CUHighTech24_BackEnd_FundDailyInfo_PrimaryAPIKey,
    },
  })
    .then((response) => {
      clearTimeout(id);
      if (!response.ok) {
        throw new Error("fromExternalGetFundNAV failed.");
      }
      return response.json();
    })
    .catch((err) => console.error(err));
};
