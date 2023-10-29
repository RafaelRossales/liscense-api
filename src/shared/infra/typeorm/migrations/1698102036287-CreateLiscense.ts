import { MigrationInterface, QueryRunner, Table } from "typeorm";

const tableName = `tb_company_liscense`;

export class CreateLiscense1698102036287 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "key",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "acquired_at",
            type: "timestamp",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "company_id",
            type: "integer",
            isNullable: false,
          },
          {
            name: "expires_at",
            type: "timestamp",
            isNullable: false,
            default: "now()",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "CompanyLiscense",
            referencedTableName: "tb_company",
            referencedColumnNames: ["id"],
            columnNames: ["company_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
