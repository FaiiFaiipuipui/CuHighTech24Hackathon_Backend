import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('mutualFundEntity')
    .addColumn('unique_id', 'varchar', (col)=> col.primaryKey())
    .addColumn('last_upd_date','date')
    .addColumn('name_th', 'varchar', (col) => col.notNull())
    .addColumn('name_en', 'varchar')
    .addColumn('active', 'boolean')
    .execute()

  await db.schema
    .createTable('mutualFundEntitySocialMedia')
    .addColumn('unique_id', 'varchar', (col) => 
      col.references('mutualFundEntity.unique_id').onDelete('cascade').notNull()
    )
    .addColumn('platform_name', 'varchar', (col) => col.notNull())
    .addColumn('platform_account_name', 'varchar', col => col.notNull())
    .addPrimaryKeyConstraint('mutualFundEntitySocialMedia_PK', ['unique_id', 'platform_name', 'platform_account_name'])
    .addColumn('platform_url', 'varchar')
    .addColumn('last_upd_date', 'date')
    .execute()

  await db.schema
    .createTable('funds')
    .addColumn('proj_id', 'varchar', (col) => col.primaryKey())
    .addColumn('last_upd_date', 'date')
    .addColumn('regis_id', 'varchar')
    .addColumn('regis_date', 'varchar')
    .addColumn('cancel_date', 'varchar')
    .addColumn('proj_name_th', 'varchar', (col) => col.notNull())
    .addColumn('proj_name_en', 'varchar')
    .addColumn('proj_abbr_name', 'varchar')
    .addColumn('fund_status', 'varchar')
    .addColumn('permit_us_investment', 'varchar')
    .addColumn('invest_country_flag', 'varchar')
    .addColumn('managingMutualFundEntity', 'varchar', (col) => 
      col.references('mutualFundEntity.unique_id').onDelete('cascade').notNull()
    )
    .execute()

  await db.schema
    .createTable('fundFactSheet')
    .addColumn('last_upd_date', 'date', (col) => col.notNull())
    .addColumn('proj_id', 'varchar', (col) =>
      col.references('funds.proj_id').onDelete('cascade').notNull()
    )
    .addPrimaryKeyConstraint('fundFactSheet_PK', ['last_upd_date', 'proj_id'])
    .addColumn('url_halfyear_report', 'varchar')
    .addColumn('url_annual_report', 'varchar')
    .addColumn('url_factsheet', 'varchar')
    .execute()

  await db.schema
    .createTable('fundProjectInfo')
    .addColumn('last_upd_date', 'date', (col) => col.notNull())
    .addColumn('proj_id', 'varchar', (col) =>
      col.references('funds.proj_id').onDelete('cascade').notNull()
    )
    .addPrimaryKeyConstraint('fundProjectInfo_PK', ['last_upd_date', 'proj_id'])
    .addColumn('proj_retail_type', 'varchar')
    .addColumn('proj_term_flag', 'boolean')
    .addColumn('proj_term_dmy', 'date')
    .execute()

  await db.schema
    .createTable('fundPolicies')
    .addColumn('last_upd_date', 'date', (col) => col.notNull())
    .addColumn('proj_id', 'varchar', (col) =>
      col.references('funds.proj_id').onDelete('cascade').notNull()
    )
    .addPrimaryKeyConstraint('fundPolicies_PK', ['last_upd_date', 'proj_id'])
    .addColumn('policy_desc', 'varchar')
    .addColumn('investment_policy_desc', 'varchar')
    .addColumn('management_style', 'varchar')
    .execute()

  await db.schema
    .createTable('fundSuitability')
    .addColumn('last_upd_date', 'date', (col) => col.notNull())
    .addColumn('proj_id', 'varchar', (col) =>
      col.references('funds.proj_id').onDelete('cascade').notNull()
    )
    .addPrimaryKeyConstraint('fundSuitability_PK', ['last_upd_date', 'proj_id'])
    .addColumn('fund_suitable_desc', 'varchar')
    .addColumn('fund_not_suitable_desc', 'varchar')
    .addColumn('important_notice', 'varchar')
    .addColumn('risk_spectrum_desc', 'varchar')
    .addColumn('risk_spectrum', 'varchar')
    .execute()

  await db.schema
    .createTable('fundEstimatedReturn')
    .addColumn('last_upd_date', 'date', (col) => col.notNull())
    .addColumn('proj_id', 'varchar', (col) =>
      col.references('funds.proj_id').onDelete('cascade').notNull()
    )
    .addPrimaryKeyConstraint('fundEstimatedReturn_PK', ['last_upd_date', 'proj_id'])
    .addColumn('total_estimated_return', 'numeric')
    .addColumn('annual_estimated_expense', 'numeric')
    .addColumn('annual_average_return', 'numeric')
    .addColumn('investment_period_year', 'varchar')
    .addColumn('investment_period_month', 'varchar')
    .execute()

  await db.schema
    .createTable('fundBenchmark')
    .addColumn('last_upd_date', 'date', (col) => col.notNull())
    .addColumn('proj_id', 'varchar', (col) =>
      col.references('funds.proj_id').onDelete('cascade').notNull()
    )
    .addPrimaryKeyConstraint('fundBenchmark_PK', ['last_upd_date', 'proj_id'])
    .addColumn('group_seq', 'varchar')
    .addColumn('benchmark', 'varchar')
    .execute()

  await db.schema
    .createTable('fundPerformance')
    .addColumn('last_upd_date', 'date', (col) => col.notNull())
    .addColumn('proj_id', 'varchar', (col) =>
      col.references('funds.proj_id').onDelete('cascade').notNull()
    )
    .addPrimaryKeyConstraint('fundPerformance_PK', ['last_upd_date', 'proj_id'])
    .addColumn('class_abbr_name', 'varchar')
    .addColumn('performance_type_desc', 'varchar')
    .addColumn('reference_period', 'varchar')
    .addColumn('performance_val', 'varchar')
    .addColumn('as_of_date', 'varchar')
    .execute()

  await db.schema
    .createTable('fundDividendPolicy')
    .addColumn('last_upd_date', 'date', (col) => col.notNull())
    .addColumn('proj_id', 'varchar', (col) =>
      col.references('funds.proj_id').onDelete('cascade').notNull()
    )
    .addPrimaryKeyConstraint('fundDividendPolicy_PK', ['last_upd_date', 'proj_id'])
    .addColumn('class_abbr_name', 'varchar')
    .addColumn('dividend_policy', 'varchar')
    .addColumn('dividend_policy_remark', 'varchar')
    .addColumn('dividend_details', 'jsonb')
    .execute()

  await db.schema
    .createTable('fundDailyInfo')
    .addColumn('nav_date', 'date', (col) => col.notNull())
    .addColumn('proj_id', 'varchar', (col) =>
      col.references('funds.proj_id').onDelete('cascade').notNull()
    )
    .addPrimaryKeyConstraint('fundDailyInfo_PK', ['nav_date', 'proj_id'])
    .addColumn('net_asset', 'numeric')
    .addColumn('last_val', 'numeric')
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('fundDailyInfo').execute()
  await db.schema.dropTable('fundDividendPolicy').execute()
  await db.schema.dropTable('fundPerformance').execute()
  await db.schema.dropTable('fundBenchmark').execute()
  await db.schema.dropTable('fundEstimatedReturn').execute()
  await db.schema.dropTable('fundSuitability').execute()
  await db.schema.dropTable('fundPolicies').execute()
  await db.schema.dropTable('fundProjectInfo').execute()
  await db.schema.dropTable('fundFactSheet').execute()
  await db.schema.dropTable('funds').execute()
  await db.schema.dropTable('mutualFundEntitySocialMedia').execute()
  await db.schema.dropTable('mutualFundEntity').execute()
}