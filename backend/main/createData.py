import sqlite3

conn = sqlite3.connect('database.db')

cursor = conn.cursor()

cursor.execute('''
  CREATE TABLE search(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      final_result TEXT
  )
''')

# cursor.execute("DROP TABLE search")