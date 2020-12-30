const nano = require("nano")('http://localhost:5984');
import { Hero } from "../models/heroes";
import * as Nano  from 'nano';

interface HeroDocument extends Nano.MaybeDocument, Hero {}

class HeroDoc implements HeroDocument {
    _id: string;
    _rev: string;
    name: string;
    health: number;
    stamina?: number | undefined;
    mana?: number | undefined;
    atk: number;
    items: string[];
    canFight?: boolean | undefined;
    canCast?: boolean | undefined;
    canHeal?: boolean | undefined;

    constructor(name: string, health: number, atk: number, items: string[]) {
        this._id = ""
        this._rev = ""
        this.name = name
        this.health = health
        this.atk = atk
        this.items = items
      }

    processAPIResponse(response: Nano.DocumentInsertResponse) {
    if (response.ok === true) {
        this._id = response.id
        this._rev = response.rev
    }
    }
}

const getDocument = async (dbToUse: string, id: string) => {
    let db = nano.use(dbToUse);

    try {
        let document = await db.get(id);
        return document;
    } catch (e) {
        console.log(`CouchDB Service Error getting Document: ${e}`)
        throw (e)
    }

}

const createDocument = async (dbToUse: string, documentBody: HeroDoc, documentId: string) => {
    const db = nano.use(dbToUse);

    try {
        let newDocument = await db.insert(documentBody, documentId);
        return newDocument;
    } catch (e) {
        console.log(`CouchDB Service Error creating Document: ${e}`);
        throw (e)
    }
}