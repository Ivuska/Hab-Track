from flask import Flask
from flask import Flask, render_template, request, redirect, url_for

from db_funkce import jmeno_uzivatele

from db_funkce import pridani_aktivity

from db_funkce import vyber_a_zobraz_aktivity
app = Flask(__name__)

@app.route('/')
def zobraz_aktivity():
    return render_template ('index.html',result=vyber_a_zobraz_aktivity())

@app.route('/addhabit',methods = ['POST', 'GET'])
def result():
    if request.method == 'POST':
      pridani_aktivity(request.form['motivation'], request.form['habit'])
      return redirect('/')