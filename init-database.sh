#!/bin/bash

echo "🔄 Waiting for SQL Server to start..."
# sleep 15s

EXISTING_DB=$(/opt/mssql-tools/bin/sqlcmd -S sqlserver -U SA -P "Password1234!" -Q "SELECT name FROM sys.databases WHERE name = 'leadmanagement-db'" -h -1 | tr -d '[:space:]')


if [ "$EXISTING_DB" == "leadmanagement-db" ]; then
  echo "✅ Database already exists, skipping creation..."
else
  echo "🚀 Creating database leadmanagement-db..."
  /opt/mssql-tools/bin/sqlcmd -S sqlserver -U SA -P "Password1234!" -Q "CREATE DATABASE [leadmanagement-db];"
fi

echo "🔄 Restoring the database..."
/opt/mssql-tools/bin/sqlcmd -S sqlserver -U SA -P "Password1234!" -d leadmanagement-db -i /tmp/backup.sql

echo "✅ Database restored successfully!"
