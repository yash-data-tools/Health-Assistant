import sqlite3



def insert_into_search(final_result):
  conn = sqlite3.connect('database.db')
  cursor = conn.cursor()

  cursor.execute("INSERT INTO search(final_result) VALUES (?)",(final_result,))
  conn.commit()

def get_from_search():
  conn = sqlite3.connect('database.db')
  cursor = conn.cursor()
  cursor.execute("SELECT * FROM search")
  conn.commit()
  return cursor.fetchall()

