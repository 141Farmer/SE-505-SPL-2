from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel, Field, Session, create_engine, select
from typing import Optional, List

# Database Setup
DATABASE_URL = "postgresql://username:password@localhost/green_harvest"
engine = create_engine(DATABASE_URL)

# Models
class Farmer(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    email: str = Field(index=True, unique=True)
    password: str

class Product(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    description: str
    price: float
    quantity: int
    farmer_id: int = Field(foreign_key="farmer.id")

class Investment(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    details: str
    annual_turnover: float
    future_plan: str
    profit_sharing: float
    farmer_id: int = Field(foreign_key="farmer.id")

class ForumPost(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    content: str
    upvotes: int = Field(default=0)
    downvotes: int = Field(default=0)

class Comment(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    content: str
    post_id: int = Field(foreign_key="forumpost.id")

# Create tables
SQLModel.metadata.create_all(engine)

# FastAPI App Setup
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_session():
    with Session(engine) as session:
        yield session

# Routes
@app.post("/farmers/", response_model=Farmer)
def create_farmer(farmer: Farmer, session: Session = Depends(get_session)):
    session.add(farmer)
    session.commit()
    session.refresh(farmer)
    return farmer

@app.post("/products/", response_model=Product)
def create_product(product: Product, session: Session = Depends(get_session)):
    session.add(product)
    session.commit()
    session.refresh(product)
    return product

@app.post("/investments/", response_model=Investment)
def create_investment(investment: Investment, session: Session = Depends(get_session)):
    session.add(investment)
    session.commit()
    session.refresh(investment)
    return investment

@app.post("/forum-posts/", response_model=ForumPost)
def create_forum_post(post: ForumPost, session: Session = Depends(get_session)):
    session.add(post)
    session.commit()
    session.refresh(post)
    return post

@app.post("/comments/", response_model=Comment)
def create_comment(comment: Comment, session: Session = Depends(get_session)):
    session.add(comment)
    session.commit()
    session.refresh(comment)
    return comment

@app.get("/products/", response_model=List[Product])
def get_products(session: Session = Depends(get_session)):
    return session.exec(select(Product)).all()

@app.get("/investments/", response_model=List[Investment])
def get_investments(session: Session = Depends(get_session)):
    return session.exec(select(Investment)).all()

@app.get("/forum-posts/", response_model=List[ForumPost])
def get_forum_posts(session: Session = Depends(get_session)):
    return session.exec(select(ForumPost)).all()

@app.get("/comments/", response_model=List[Comment])
def get_comments(post_id: int, session: Session = Depends(get_session)):
    return session.exec(select(Comment).where(Comment.post_id == post_id)).all()
