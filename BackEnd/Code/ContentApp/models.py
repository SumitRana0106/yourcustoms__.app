from pydantic import BaseModel, Field 

class Document(BaseModel):
    id: int = None
    page_title: str = ""
    html_content: str = "<div></div>"
    homepage_grid_column:int = 0
    thumbnail_title:str = ""
    thumbnail_block_height:int = 300
    thumbnail_image_url:str = ""
    tags: list = []