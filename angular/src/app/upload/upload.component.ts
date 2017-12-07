import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  
})
export class UploadComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url:'http://localhost:3000/products/upload'});
  constructor() { 
    
  }

  ngOnInit() {
    
  }
  
  up(){
    this.uploader.uploadAll();
  }
}
