from datetime import datetime, timezone
from typing import Optional
from sqlmodel import Field, SQLModel, Relationship  #text

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str = Field(sa_column_kwargs={"unique": True})
    fullname: str
    profile_photo: str | None
    phone: str = Field(sa_column_kwargs={"unique": True})
    email: str = Field(sa_column_kwargs={"unique": True})
    password: str
    updated_at: datetime = Field(default=datetime.now(timezone.utc))

    def __repr__(self):
        return self.fullname

class Investor(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int | None = Field(foreign_key="user.id")
    nid: str | None
    updated_at: datetime = Field(default=datetime.now(timezone.utc))

    
class Farm(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int | None = Field(foreign_key="user.id")
    address: str  | None
    nid: str | None
    farm_description: str | None
    employee_count: int | None
    updated_at: datetime = Field(default=datetime.now(timezone.utc))

    products: list['Product'] | None = Relationship(back_populates="farm")

    # def __repr__(self):
    #     return self.farm_name
    
class Product(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    farm_id: int | None = Field(foreign_key="farm.id")
    product_name: str | None
    product_image: str | None
    unit_price: float | None
    rating: float | None
    stock_amount: int | None
    production_produre: str | None

    farm: Farm | None = Relationship(back_populates="products")
    
    def __repr__(self):
        return self.product_name