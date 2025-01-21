from pydantic import BaseModel

class UserCreate(BaseModel):
    username: str
    fullname: str
    email: str
    phoneNumber: str
    password: str

class UserAdded(BaseModel):
    msg: str

class UserLogin(BaseModel):
    username: str
    password: str

class LoginResponse(BaseModel):
    msg: str
    username: str

class DashBoardResponse(BaseModel):
    username: str
    fullname: str
    email: str
    phone: str

class CreateFarm(BaseModel):
    user_id: int 

class CreateFarmResponse(BaseModel):
    msg: str
    user_id: int

class FarmUpdate(BaseModel):
    address: str
    nid: str
    farm_description: str
    employee_count: int
