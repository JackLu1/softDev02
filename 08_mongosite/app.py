# Team team -- Peter Jack Lu
# SoftDev1 pd8
# Kxx -- hwname
# 201x-xx-xx

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
    pass

@app.route('/height')
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
