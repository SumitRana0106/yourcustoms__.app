from fastapi import FastAPI, APIRouter, Request, Response
from fastapi.templating import Jinja2Templates

render = APIRouter()
template = Jinja2Templates(directory="templates")


@render.get("/")
def render_home(request:Request):
    return template.TemplateResponse("index.html",{"request": request})


@render.get("/page/{id}/")
def render_page(request:Request, id:int = None):
    return template.TemplateResponse("index.html",{"request":request, "id": id})