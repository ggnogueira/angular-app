import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

const  APIUrlAddress="http://localhost:8080/api/v1/addresses";

@Injectable({
  providedIn: 'root'
})
export class AddressService extends DataService{
  constructor(http:HttpClient){
    super(APIUrlAddress,http);
  }
}