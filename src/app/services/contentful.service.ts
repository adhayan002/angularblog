import { Injectable } from '@angular/core';
import {createClient,Entry} from 'contentful'
import { from } from 'rxjs/internal/observable/from';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client=createClient({
    space:'ucsbsw653a91',
    accessToken:'ihZ1itm9SUGxTfPAAMoPLHATnkj9iQZcEYl94vaqhAE'
  });

  getAllEntries(){
    const promise=this.client.getEntries();
    return from(promise);
  }

  getEntryById(id:string){
    const promise=this.client.getEntry(id);
    return from(promise);
  }
}
