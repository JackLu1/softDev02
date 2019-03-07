# Team team -- Peter Cwalina, Jack Lu, Shafali Gupta
# SoftDev1 pd8
# K08 -- Ay Mon, Go Git It From Yer Flask
# 2019-03-07

# github.com/jacklu1
# github.com/petercwalina
# github.com/shafali731

# stdlib
import json
from urllib import request

# pip install
from flask import Flask, render_template

# custom modules

app = Flask(__name__)

KEY = ""
URL_STUB = ""
URL = URL_STUB + KEY

@app.route('/')
def index():
    return render_template("base.html")

@app.route('/type')
def getType():
    t = request.form['ty']
    print(t)

@app.route('/height', methods=['GET', 'POST'])
def getHeight():
    pass

@app.route('/rare')
def getRare():
    pass

if __name__=="__main__":
    app.debug = True
    app.run()

#if __name__=="__main__":
#    app.debug = True
#    app.run(host="0.0.0.0")

#browser location
# <droplet addr>:5000
