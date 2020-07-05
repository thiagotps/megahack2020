from sqlalchemy.orm import Session

from . import models, schemas


def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.UserDB(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user(db: Session, email: str):
    return db.query(models.UserDB).filter(models.UserDB.email == email).first()

def create_course(db: Session, course: schemas.CourseCreate):
    db_course = models.CourseDB(**course.dict())

def get_courses(db: Session):
    return db.query(models.CourseDB).all()

def create_course_content(db: Session, content: schemas.ContentCreate, course_name: str):
    db_item = models.ContentDB(**content.dict(), course_name=course_name)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
