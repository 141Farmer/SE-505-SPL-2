from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jwt_handler import decode_access_token
from database import engine
from sqlmodel import Session, select
from models import User

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    payload = decode_access_token(token)
    if payload is None:
        raise credentials_exception
    username: str = payload.get("sub")
    if username is None:
        raise credentials_exception
    
    with Session(engine) as session:
        query = select(User).where(User.username == username)
        db_user = session.exec(query).first()
        if db_user is None:
            raise credentials_exception
        return db_user