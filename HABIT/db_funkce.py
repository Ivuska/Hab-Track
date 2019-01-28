import psycopg2
import psycopg2.extras
import os
from flask import g
from hashlib import sha512
from flask_login import UserMixin

from geopy.geocoders import Here as locator
from geopy.exc import GeopyError
from functools import lru_cache

def get_db():
    """ Spojeni s dtb. """

    if not hasattr(g, 'db') or g.db.closed == 1:
        con = psycopg2.connect(host='localhost', user='postgres', password='12345', dbname='postgres')
        g.db = con
    return g.db


def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()

def jmeno_uzivatele():
    """ Vypise seznam uzivatelu """

    sql = """SELECT jmeno FROM uzivatele;"""
    conn = get_db()
    cur = conn.cursor()
    cur.execute(sql)
    data = cur.fetchall()
    return data

def vyber_a_zobraz_aktivity():
    """Zobrazi aktivity zadané v databázi"""
    sql = """SELECT aktivita, motivace FROM aktivita;"""
    conn = get_db()
    cur = conn.cursor()
    cur.execute(sql)
    data = cur.fetchall()
    return data

def pridani_aktivity(motivation,habit):
    """Prida novou aktivitu uzivatele do databaze"""
    sql = """INSERT INTO aktivita (aktivita, motivace, uzivatel_id, aktivita_id) VALUES ( %s, %s, 2, 11) RETURNING aktivita_id;"""
    conn = get_db()
    id_aktivita = None

    try:
      cur = conn.cursor()
      cur.execute(sql, (habit, motivation))
      id_aktivita = cur.fetchone()[0]
      conn.commit()
      cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
          conn.close()
    return id_aktivita

