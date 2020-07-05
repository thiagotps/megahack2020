from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base

class UserDB(Base):
    __tablename__ = "users"
    email = Column(String, primary_key=True, index=True)
    hashed_password = Column(String, index=True)


class CourseDB(Base):
    __tablename__ = "courses"
    name = Column(String, primary_key=True, index=True)
    desc = Column(String, index=True)
    contents = relationship("ContentDB", back_populates="course")

class ContentDB(Base):
    __tablename__ = "contents"
    filename = Column(String, primary_key=True, index=True)
    desc = Column(String, index=True)

    course_name = Column(String, ForeignKey("courses.name"))
    course = relationship("CourseDB", back_populates="contents")
