# api.mongodb.com/python/current/tutorial.html
import pymongo


#SERVER_ADDR = "159.230.61.139"
#connection = pymongo.MongoClient(SERVER_ADDR)

connection = pymongo.MongoClient('mongodb://localhost:27017/')
db = connection.dataset

for a in db.restaurants.find():
    print(a)

boroughs = ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island']
# data = db.restaurants.find({
#     "borough":"Bronx"
#     })
