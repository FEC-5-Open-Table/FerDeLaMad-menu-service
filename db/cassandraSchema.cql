DROP KEYSPACE IF EXISTS menu;
CREATE KEYSPACE menu WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };
USE menu;
-- https://stackoverflow.com/questions/35036354/how-to-create-nested-collection-maptext-listtext-type-in-cassandra-database
CREATE TABLE menus (id INT PRIMARY KEY, name TEXT, submenus map<text, frozen<list<text>>>);

-- Insert data
copy menus FROM '/Users/david/hackreactor/menu/db/csv/cass-menus.csv' WITH DELIMITER=';';
  
-- Change compaction strategy to optimize for reads instead of writes
ALTER TABLE menus WITH
  compaction = { 'class' :  'LeveledCompactionStrategy'  };

-- Create materialized view
CREATE MATERIALIZED VIEW query_by_name
AS SELECT name, submenus 
FROM menus
WHERE name IS NOT NULL AND id IS NOT NULL 
PRIMARY KEY (name, id);

-- cqlsh -u cassandra -p cassandra -f './db/cassandraSchema.cql' 127.0.0.1
