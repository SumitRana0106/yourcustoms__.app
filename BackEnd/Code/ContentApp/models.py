from pydantic import BaseModel, Field 

class Document(BaseModel):
    id: int = None
    html_content: str = "<div></div>"