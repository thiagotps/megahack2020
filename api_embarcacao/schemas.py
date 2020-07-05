from typing import List, Optional
from pydantic import BaseModel

class UserBase(BaseModel):
    email: str

class UserCreate(UserBase):
    hash_password: str

class User(UserBase):
    class Config:
        orm_mode = True

class ContentBase(BaseModel):
    filename: str
    desc: str

class ContentCreate(ContentBase):
    pass

class Content(ContentBase):
    course_name: str
    class Config:
        orm_mode = True

class CourseBase(BaseModel):
    name: str
    desc: str

class CourseCreate(CourseBase):
    pass

class Course(CourseBase):
    contents: List[Content] = []
    class Config:
        orm_mode = True

