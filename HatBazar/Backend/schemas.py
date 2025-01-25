from pydantic import BaseModel

class UserCreate(BaseModel):
    username: str
    fullname: str
    email: str
    phoneNumber: str
    password: str

class UserLogin(BaseModel):
    username: str
    password: str

class LoginResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"

class DashBoardResponse(BaseModel):
    username: str
    fullname: str
    email: str
    phone: str

class CreateFarm(BaseModel):
    user_id: int 

class CreateFarmResponse(BaseModel):
    msg: str
    user_id: int      #farm id hower kotha

class FarmUpdate(BaseModel):
    address: str
    nid: str
    farm_description: str
    employee_count: int

class CreateProduct(BaseModel):
    farm_id: int
    product_name: str
    product_image: str
    unit_price: float
    stock_amount: int
    production_procedure: str

class CreateProductResponse(BaseModel):
    msg: str
    # product_id: int
    product_name: str

class GetProductResponse(BaseModel):
    # product_id: int # not be shown
    product_image: str
    product_name: str
    rating: float | None
    unit_price: float
    stock_amount: int
    farm_name: str
    farm_addresss: str | None
    production_procedure: str | None