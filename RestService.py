from flask import Flask
from flask_cors import CORS #, se usa para definr del cors cross_origin
from flask import Flask, jsonify
from flask import request

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
#@cross_origin(origin='http://localhost:4200')
def create():
    if request.method == "POST":
       #brand=request.form["brand"]
      newDict = request.get_json()
     
      
      #brand = request.args.get("brand")
      #model = request.args.get("model")
      #year= request.args.get("year") 
       
 
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


@app.route("/user",methods=['POST'])
def user():
    user_dict = request.args.get("id")
    return jsonify(user_dict)
    
"""


 #user= request.get_json()
           
primera forma
@app.route("/datos/<elnombre>", methods=['POST'])
def datos(elnombre):
    print(elnombre )
    thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
   }
    return  f'User {elnombre}'
    """
"""
esto es para el cors tal como el de node
@app.after_request
def add_headers(response):
    response.headers.add('Content-Type', 'application/json')
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:4200')
    response.headers.add('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Expose-Headers', 'Content-Type,Content-Length,Authorization,X-Pagination')
    return response"""
"""Ahora, para iniciar la aplicación, debemos verificar que el archivo ejecutado sea el programa principal o no."""
if __name__ == '__main__':
    """Con el debug true hace lo mismo que el nodemon"""
    app.run(debug=True)