import {
  ColumnType,
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable
} from 'kysely'

export interface Database {
  mutualFundEntity: MutualFundEntityTable
  mutualFundEntitySocialMedia: MutualFundEntitySocialMediaTable
  funds: FundsTable
  fundFactSheet: FundFactSheetTable
  fundProjectInfo: FundProjectInfoTable
  fundPolicies: FundPoliciesTable
  fundSuitability: FundSuitabilityTable
  fundEstimatedReturn: FundEstimatedReturnTable
  fundBenchmark: FundBenchmarkTable
  fundPerformance: FundPerformanceTable
  fundDividendPolicy: FundDividendPolicyTable
  fundDailyInfo: FundDailyInfoTable
}
export interface MutualFundEntityTable {
  unique_id : ColumnType<string, string , never>
  last_upd_date : Date
  name_th : string
  name_en : string
  active : boolean
}

export type MutualFundEntity = Selectable<MutualFundEntityTable>
export type NewMutualFundEntity = Insertable<MutualFundEntityTable>
export type MutualFundEntityUpdate = Updateable<MutualFundEntityTable>

export interface MutualFundEntitySocialMediaTable {
  unique_id : ColumnType<string, string , never>
  platform_name : string
  platform_account_name : string
  platform_url : string
  last_upd_date: Date
}

export type MutualFundEntitySocialMedia = Selectable<MutualFundEntitySocialMediaTable>
export type NewMutualFundEntitySocialMedia = Insertable<MutualFundEntitySocialMediaTable>
export type MutualFundEntitySocialMediaUpdate = Updateable<MutualFundEntitySocialMediaTable>

export interface FundsTable {
    proj_id: ColumnType<string, string , never>
    last_upd_date: Date
    regis_id: string
    regis_date: string
    cancel_date: string
    proj_name_th: string
    proj_name_en: string
    proj_abbr_name: string
    fund_status: string
    unique_id: string
    permit_us_investment: string
    invest_country_flag: string
    MutualFundEntity_unique_id : string
}

export type Funds = Selectable<FundsTable>
export type NewFunds = Insertable<FundsTable>
export type FundsUpdate = Updateable<FundsTable>

export interface FundFactSheetTable {
  last_upd_date: Date
  proj_id: ColumnType<string, string , never>
  url_halfyear_report: string
  url_annual_report: string
  url_factsheet: string
}

export type FundFactSheet = Selectable<FundFactSheetTable>
export type NewFundFactSheet = Insertable<FundFactSheetTable>
export type FundFactSheetUpdate = Updateable<FundFactSheetTable>

export interface FundProjectInfoTable {
  last_upd_date: Date
  proj_id: ColumnType<string, string , never>
  proj_retail_type: string
  proj_term_flag: boolean
  //TODO change type?
  proj_term_dd: string
  proj_term_mm: string
  proj_term_yy: string
}

export type FundProjectInfo = Selectable<FundProjectInfoTable>
export type NewFundProjectInfo = Insertable<FundProjectInfoTable>
export type FundProjectInfoUpdate = Updateable<FundProjectInfoTable>

export interface FundPoliciesTable {
  last_upd_date: Date
  proj_id: ColumnType<string, string , never>
  policy_desc: string
  investment_policy_desc: string /* (fromBase64) */
  management_style: string
}

export type FundPolicies = Selectable<FundPoliciesTable>
export type NewFundPolicies = Insertable<FundPoliciesTable>
export type FundPoliciesUpdate = Updateable<FundPoliciesTable>

export interface FundSuitabilityTable {
  last_upd_date: Date
  proj_id: ColumnType<string, string , never>
  fund_suitable_desc:string /* (fromBase64) */
  fund_not_suitable_desc: string /* (fromBase64) */
  important_notice: string /* (fromBase64) */
  risk_spectrum_desc: string /* (fromBase64) */
  risk_spectrum: string
}

export type FundSuitability = Selectable<FundSuitabilityTable>
export type NewFundSuitability = Insertable<FundSuitabilityTable>
export type FundSuitabilityUpdate = Updateable<FundSuitabilityTable>

export interface FundEstimatedReturnTable {
  last_upd_date: Date
  proj_id: ColumnType<string, string , never>
  total_estimated_return: number
  annual_estimated_expense: number
  annual_average_return: number
  investment_period_year: string
  investment_period_month: string
}

export type FundEstimatedReturn = Selectable<FundEstimatedReturnTable>
export type NewFundEstimatedReturn = Insertable<FundEstimatedReturnTable>
export type FundEstimatedReturnUpdate = Updateable<FundEstimatedReturnTable>

export interface FundBenchmarkTable {
  last_upd_date: Date
  proj_id: ColumnType<string, string , never>
  group_seq: string
  benchmark: string
}

export type FundBenchmark = Selectable<FundBenchmarkTable>
export type NewFundBenchmark = Insertable<FundBenchmarkTable>
export type FundBenchmarkUpdate = Updateable<FundBenchmarkTable>

export interface FundPerformanceTable {
  last_upd_date: Date
  proj_id: ColumnType<string, string , never>
  class_abbr_name: string
  performance_type_desc: string
  reference_period: string
  performance_val: string
  as_of_date: string
}

export type FundPerformance = Selectable<FundPerformanceTable>
export type NewFundPerformance = Insertable<FundPerformanceTable>
export type FundPerformanceUpdate = Updateable<FundPerformanceTable>

export interface FundDividendPolicyTable {
  last_upd_date: Date
  proj_id: ColumnType<string, string , never>
  class_abbr_name: string,
  dividend_policy: string,
  dividend_policy_remark: string,
  dividend_details: JSONColumnType<{
    book_closing_date: string | null;
    payment_date: string | null;
    dividend_per_share: string | null;
  }>
}

export type FundDividendPolicy = Selectable<FundDividendPolicyTable>
export type NewFundDividendPolicy = Insertable<FundDividendPolicyTable>
export type FundDividendPolicyUpdate = Updateable<FundDividendPolicyTable>

export interface FundDailyInfoTable {
  nav_date: Date
  proj_id: ColumnType<string, string , never>
  net_asset: number
  last_val: number
}

export type FundDailyInfo = Selectable<FundDailyInfoTable>
export type NewFundDailyInfo = Insertable<FundDailyInfoTable>
export type FundDailyInfoUpdate = Updateable<FundDailyInfoTable>
