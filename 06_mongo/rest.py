# Aaron Li, Jack Lu: LuLians
# SoftDev2 pd8
# K06 -- Yummy Mongo Py
# 2019-02-28

# api.mongodb.com/python/current/tutorial.html
import pymongo
import pprint


#SERVER_ADDR = "159.89.238.115"
SERVER_ADDR = "127.0.0.1"
connection = pymongo.MongoClient(SERVER_ADDR)


pp = pprint.PrettyPrinter(indent=4)
db = connection.db
collection = db.restaurants


# restaurants with specified borough
def restInBorough(b):
    cursor = collection.find({"borough": b})
    for i in cursor:
        pp.pprint(i)
        print()

def restInZip(z):
    cursor = collection.find({"address.zipcode" : str(z) })
    for i in cursor:
        pp.pprint(i)
        print()

def zipGrade(z, g):
    cursor = collection.find({
        "address.zipcode" : str(z),
        "grades.grade" : g
        })
    for i in cursor:
        pp.pprint(i)
        print()

def zipLowScore(z, s):
    cursor = collection.find({
        "address.zipcode" : str(z),
        "grades.score": {"$lt": s}
        })
    for i in cursor:
        pp.pprint(i)
        print()

# what style of food
def zipType(z, food):
    cursor = collection.find({
        "address.zipcode": str(z),
        "cuisine" : food
        })
    for i in cursor:
        pp.pprint(i)
        print()

# zip code
#restInBorough("Bronx")
#restInZip(10282)
#zipGrade(10282, 'C')
#zipLowScore(10282, 4)
zipType(10282, 'American')
