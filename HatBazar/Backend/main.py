from fastapi import FastAPI, HTTPException
from sqlmodel import Session, select
from database import engine, create_db_and_tables
from models import User
from schemas import UserCreate, UserAdded, UserLogin, LoginResponse, DashBoardResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://localhost:5173/",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5173/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

create_db_and_tables()

@app.post("/signup/", response_model=UserAdded)
def signup(user: UserCreate):
    user = User(username=user.username, fullname=user.fullname, email=user.email, phone=user.phoneNumber, password=user.password)
    with Session(engine) as session:
        session.add(user)
        session.commit()
        session.refresh(user)
        return UserAdded(msg="Registration successfull")
    
@app.post("/login/")
def login(userLogin: UserLogin):
    with Session(engine) as session:
        query = select(User).where(User.username == userLogin.username)
        db_user = session.exec(query).first()
        
        if not db_user:
            raise HTTPException(status_code=404, detail="User not found!")
        
        if db_user.password != userLogin.password:
            raise HTTPException(status_code=401, detail="Incorrect password!")
        
        return LoginResponse(msg="Login successful", username=db_user.username)

@app.get("/dashboard/", response_model=DashBoardResponse)
def getDashBoard(username: str):
    with Session(engine) as session:
        query = select(User).where(User.username==username)
        db_user = session.exec(query).first()

        return DashBoardResponse(username=db_user.username, fullname=db_user.fullname, email=db_user.email, phone=db_user.phone)
