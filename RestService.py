from flask import Flask
from flask_cors import CORS #, se usa para definr del cors cross_origin
from flask import Flask, jsonify
from flask import request
from waitress import serve

app = Flask(__name__)
CORS(app)
thisdict ={
            "brand": "Ford",
            "model": "Mustang",
             "year": 1964
         }
@app.route("/", methods=['GET'])

def index():
    
    return jsonify(["Welcome to API Python",thisdict])
"""
Method post

@params no params
return the new dictonary 
"""
@app.route("/v1/create",methods=["GET",'POST'])
def create():
    if request.method == "POST":
       #brand=request.form["brand"]
      newDict = request.get_json()
     
      
       
 
    return   jsonify(newDict)
"""
Method update

@params year value to be updated
return the new dictonary's value for the key 
"""

@app.route("/v1/update/<int:id>",methods=['PUT','POST'])
def update(id):
        if request.method == "POST": 
            thisdict ={
            "brand": "Ford",
            "model": "Mustang",
             "year": 1964
         }
           
            newDictonary = request.get_json()
            thisdict.update(newDictonary)
   
       
            return   jsonify(thisdict)
"""
Method delete

@params the year to be deleted
return the dictionary without the removed value
"""       
@app.route("/v1/delete/<int:id>",methods=['POST','DELETE'])

def delete(id):

    if request.method == 'POST':
         thisdict.pop("year")
       
    return f'{ thisdict }'
    
if __name__ == '__main__':
   serve(app, host='0.0.0.0', port=5000)
