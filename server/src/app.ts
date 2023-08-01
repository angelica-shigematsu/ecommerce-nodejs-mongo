import express from "express";
import mongoose from 'mongoose'
import { mongoURL } from './config'

class App {
  public express: express.Application

  public constructor () {
    this.express = express();
    this.middlewares()
    this.database()
  }

  private middlewares (): void {
    this.express.use(express.json())
  } 

  private database (): void {
    mongoose.connect(mongoURL
    ).then(() => console.log('Connect to database'))
    .catch((error) => console.log('Error: ' + error))
  }
}

export default new App().express