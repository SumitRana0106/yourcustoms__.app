from fastapi import APIRouter, Response, Request
from UtilityApp import dbObject as db
from .models import *

content = APIRouter(prefix="/content/v1")

@content.get("/", tags=["content","get"], status_code=201)
def get(response: Response, id:int= None):
    result = dict()
    result['result'] = "SUCCESS"
    status_code = 200

    print(" >>>> test 1 : ",id )

    try:
        if id == None:
            raise KeyError("'id' missing in query parameters ... !")
        else:
            res = db.get(id)
            print(res)
            result['data'] = res
    except Exception as e:
        status_code = 500
        result['result'] = "FAILURE"
        result['error_reason'] = str(e)

    response.status_code = status_code
    return result

@content.get("/all/", status_code=201)
def get_content_list(response: Response):
    result = dict()
    result['result'] = "SUCCESS"
    status_code = 200

    try:
        print("in T1 >>>>")
        res = db.all()
        print("in T3 >>>")
        for doc in res:
            doc.pop('html_content')
        
        result['data'] = res        
    except Exception as e:
        status_code = 500
        result['result'] = "FAILURE"
        result['error_reason'] = str(e)

    response.status_code = status_code
    return result




@content.post("/")
def post(Doc: Document, request: Request, response: Response):
    result = dict()
    result['result'] = "SUCCESS"
    status_code = 200

    try:
        print(" t1 >>>")
        res = db.save(Doc.id,Doc.model_dump())
        print("t2 >>>>")
    except Exception as e:
        status_code = 500
        result['result'] = "FAILURE"
        result['error_reason'] = str(e)

    response.status_code = status_code
    return result

@content.delete("/{id}/")
def delete(response: Response,id: int = None):
    result = dict()
    result['result'] = "SUCCESS"
    status_code = 200

    try:
        if id == None:
            raise KeyError("Invalid 'id' value in path parameters.. !!!")
        else:
            result['id'] = id
    except Exception as e:
        status_code = 500
        result['result'] = "FAILURE"
        result['error_reason'] = str(e)

    response.status_code = status_code
    return result

@content.put("/{id}/")
def put(response: Response,id:int=None):
    result = dict()
    result['result'] = "SUCCESS"
    status_code = 200

    try:
        if id == None:
            raise KeyError("Invalid 'id' value in path parameters.. !!!")
        else:
            result['id'] = id
    except Exception as e:
        status_code = 500
        result['result'] = "FAILURE"
        result['error_reason'] = str(e)

    response.status_code = status_code
    return result