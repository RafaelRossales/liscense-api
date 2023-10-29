import { MigrationInterface, QueryRunner, Table } from "typeorm";

const tableName = `tb_company`;

export class CreateCompany1698100949484 implements MigrationInterface {
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
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "cnpj",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "small_logo",
            type: "varchar",
            isNullable: true,
            isUnique: true,
            default: "NULL",
          },
          {
            name: "large_logo",
            type: "varchar",
            isNullable: true,
            isUnique: true,
            default: "NULL",
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
