import csv
import json

header = open('data.csv').readline().split(',')

csvfile = open('data.csv', 'r')
jsonfile = open('data.json', 'w')

reader = csv.DictReader(csvfile, header)
out = json.dumps( [row for row in reader] )
jsonfile.write(out)
