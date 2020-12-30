import { MongoClient, Db, InsertOneWriteOpResult, InsertWriteOpResult, UpdateWriteOpResult, DeleteWriteOpResultObject, WithId } from 'mongodb';
import { Hero } from "../models/heroes";

const DBClient = new MongoClient("mongodb://localhost:27017",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

let DB: Db;

async function setupDb() {
  await DBClient.connect();
  DB = DBClient.db("heroes");
}

const ItemsDb = {
    Get: async<T extends Record<string, any>>(collection: string, query?: Partial<T>): Promise<WithId<T>[]> => DB.collection(collection).find(query).toArray(),
  
    Insert: async<T extends Record<string, any>>(collection: string, value: T): Promise<InsertOneWriteOpResult<WithId<T>>>  => DB.collection(collection).insertOne(value),
  
    InsertMany: async<T extends Record<string, any>>(collection: string, value: T[]): Promise<InsertWriteOpResult<WithId<T>>> => DB.collection(collection).insertMany(value),
  
    Update: async<T extends Record<string, any>>(collection: string, query: Partial<T>, value: T): Promise<UpdateWriteOpResult>  => DB.collection(collection).updateOne(query, { $set: value }),
  
    DeleteOne: async<T extends Record<string, any>>(collection: string, query: Partial<T>): Promise<DeleteWriteOpResultObject> => DB.collection(collection).deleteOne(query),
  
    DeleteMany: async<T extends Record<string, any>>(collection: string, query: Partial<T>): Promise<DeleteWriteOpResultObject> => DB.collection(collection).deleteMany(query),
};

function createItemsDb<T>(collection: string){
    return {
        Get: async (query?: Partial<T>): Promise<WithId<T>[]> => ItemsDb.Get<T>(collection, query),
        Insert: async (value: T): Promise<InsertOneWriteOpResult<WithId<T>>> => ItemsDb.Insert(collection, value),
        InsertMany: async(value: T[]): Promise<InsertWriteOpResult<WithId<T>>> => ItemsDb.InsertMany(collection, value),
        Update: async (query: Partial<T>, value: T): Promise<UpdateWriteOpResult> => ItemsDb.Update(collection, query, value),
        DeleteOne: async (query: Partial<T>): Promise<DeleteWriteOpResultObject>  => ItemsDb.DeleteOne(collection, query),
        DeleteMany: async (query: Partial<T>): Promise<DeleteWriteOpResultObject> => ItemsDb.DeleteMany(collection, query),
    };
}

const HeroesDb = createItemsDb<Hero>("Heroes");

module.exports = {
    HeroesDb,
    setupDb
}