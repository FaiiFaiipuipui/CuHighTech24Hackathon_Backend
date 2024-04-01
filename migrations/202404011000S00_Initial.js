exports.up = function (knex) {
  return knex.schema
    .createTable('mutualFundEntity', function (table) {
      table.string('unique_id').primary();
      table.date('last_upd_date');
      table.string('name_th').notNullable();
      table.string('name_en');
      table.boolean('active');
    })
    .createTable('mutualFundEntitySocialMedia', function (table) {
      table.string('unique_id').references('mutualFundEntity.unique_id').onDelete('cascade').notNullable();
      table.string('platform_name').notNullable();
      table.string('platform_account_name').notNullable();
      table.primary(['unique_id', 'platform_name', 'platform_account_name'], 'mutualFundEntitySocialMedia_PK');
      table.string('platform_url');
      table.date('last_upd_date');
    })
    .createTable('funds', function (table) {
      table.string('proj_id').primary();
      table.date('last_upd_date');
      table.string('regis_id');
      table.string('regis_date');
      table.string('cancel_date');
      table.string('proj_name_th').notNullable();
      table.string('proj_name_en');
      table.string('proj_abbr_name');
      table.string('fund_status');
      table.string('permit_us_investment');
      table.string('invest_country_flag');
      table.string('managingMutualFundEntity').references('mutualFundEntity.unique_id').onDelete('cascade').notNullable();
    })
    .createTable('fundFactSheet', function (table) {
      table.date('last_upd_date').defaultTo(knex.fn.now()).notNullable();
      table.string('proj_id').references('funds.proj_id').onDelete('cascade').notNullable();
      table.primary(['last_upd_date', 'proj_id']);
      table.string('url_halfyear_report');
      table.string('url_annual_report');
      table.string('url_factsheet');
    })
    .createTable('fundProjectInfo', function (table) {
      table.date('last_upd_date').defaultTo(knex.fn.now()).notNullable();
      table.string('proj_id').references('funds.proj_id').onDelete('cascade').notNullable();
      table.primary(['last_upd_date', 'proj_id'], 'fundProjectInfo_PK');
      table.string('proj_retail_type');
      table.boolean('proj_term_flag');
      table.date('proj_term_dmy');
    })
    .createTable('fundPolicies', function (table) {
      table.date('last_upd_date').defaultTo(knex.fn.now()).notNullable();
      table.string('proj_id').references('funds.proj_id').onDelete('cascade').notNullable();
      table.primary(['last_upd_date', 'proj_id']);
      table.string('policy_desc');
      table.string('investment_policy_desc');
      table.string('management_style');
    })
    .createTable('fundSuitability', function (table) {
      table.date('last_upd_date').defaultTo(knex.fn.now()).notNullable();
      table.string('proj_id').references('funds.proj_id').onDelete('cascade').notNullable();
      table.primary(['last_upd_date', 'proj_id']);
      table.string('fund_suitable_desc');
      table.string('fund_not_suitable_desc');
      table.string('important_notice');
      table.string('risk_spectrum_desc');
      table.string('risk_spectrum');
    })
    .createTable('fundBenchmark', function (table) {
      table.date('last_upd_date').defaultTo(knex.fn.now()).notNullable();
      table.string('proj_id').references('funds.proj_id').onDelete('cascade').notNullable();
      table.primary(['last_upd_date', 'proj_id']);
      table.string('group_seq');
      table.string('benchmark');
    })
    .createTable('fundDailyInfo', function (table) {
      table.date('nav_date').defaultTo(knex.fn.now()).notNullable();
      table.string('proj_id').references('funds.proj_id').onDelete('cascade').notNullable();
      table.primary(['nav_date', 'proj_id']);
      table.decimal('net_asset');
      table.decimal('last_val');
    })
};

exports.down = function (knex) {
  return knex.schema
  .dropTable('fundDailyInfo')
  .dropTable('fundBenchmark')
  .dropTable('fundSuitability')
  .dropTable('fundPolicies')
  .dropTable('fundProjectInfo')
  .dropTable('fundFactSheet')
  .dropTable('funds')
  .dropTable('mutualFundEntitySocialMedia')
  .dropTable('mutualFundEntity');
};

exports.config = { transaction: false };