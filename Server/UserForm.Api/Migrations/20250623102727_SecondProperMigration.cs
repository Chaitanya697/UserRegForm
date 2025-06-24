using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UserForm.Api.Migrations
{
    /// <inheritdoc />
    public partial class SecondProperMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "agree",
                table: "userdetails",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "date",
                table: "userdetails",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "agree",
                table: "userdetails");

            migrationBuilder.DropColumn(
                name: "date",
                table: "userdetails");
        }
    }
}
