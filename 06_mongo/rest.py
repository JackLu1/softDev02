# api.mongodb.com/python/current/tutorial.html
import pymongo

import pprint

SERVER_ADDR = "159.230.61.139"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection['dataset']
collection = db.restaurants

data = db.restaurants.find({
    "borough":"Bronx"
    })
#pprint(data[1])
for i in data:
    print(i)
