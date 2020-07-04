from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

class User(BaseModel):
    email: str
    senha: str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def readRoot():
    return {"Hello": "World"}


@app.post("/login")
async def login(user: User):
	email = user.email
	senha = user.senha
	return {"login_status": True}

@app.get("/avaliacoes")
async def getResultadoAvaliacoes():
    return {
    	"ruim": 30,
    	"medio": 30,
    	"bom": 40
    }

@app.get("/cursos")
async def getCursos():
    return [
    	{
			"nome": "curso 1",
			"acessos": 1,
    	},
    	{
			"nome": "curso 2",
			"acessos": 5,
    	},
    	{
			"nome": "curso 3",
			"acessos": 10,
    	},
    ]

@app.get("/colaboradores")
async def getColaboradores():
    return [
    	{
			"nome": "colaborador 1",
    	},
    	{
			"nome": "colaborador 2",
    	},
    	{
			"nome": "colaborador 3",
    	},
    ]
