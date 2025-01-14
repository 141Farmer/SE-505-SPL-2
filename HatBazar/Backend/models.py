from datetime import datetime, timezone
from typing import Optional
from sqlmodel import Field, SQLModel

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str
    fullname: str
    email: str
    phone: str
    password: str
    updated_at: datetime = Field(default=datetime.now(timezone.utc))

    def __repr__(self):
        return self.fullname