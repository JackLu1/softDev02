# api.mongodb.com/python/current/tutorial.html
import pymongo

# SERVER_ADDR = "159.230.61.139"
SERVER_ADDR = "149.89.150.100"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants
print(collection)
