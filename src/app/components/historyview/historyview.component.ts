import { Component, OnInit } from '@angular/core';
import { History } from '../../services/historyList';
import { Router, ActivatedRoute } from '@angular/router';
import { DownloadService } from '../../services/downloadService';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-historyview',
  templateUrl: './historyview.component.html',
  styleUrls: ['./historyview.component.css']
})
export class HistoryviewComponent implements OnInit {

  public historyList:any;
  public semestryHystory:any;

  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _downloadService: DownloadService
  ) { }

  ngOnInit(): void {

    this.historyList=History;

    this._route.params.subscribe(params=>{
      const id=params.id;
      console.log(id);
      this.getHistory(id);
    });


  }

  getHistory(id){
    this.semestryHystory=this.historyList.filter((history)=>{
      return history.id===id;
    });
    console.log(this.semestryHystory);
  }


  returnBlob(res):Blob{
    return new Blob([res],{type:'application/pdf'});
  }

  downloadDocument(fileName){
    console.log('con este se descarga el '+fileName);
    this._downloadService.downloadFile(fileName).subscribe(res=>{
      if(res){
        fileSaver.saveAs(this.returnBlob(res), fileName);
      }
    });
  }

  viewDocument(fileName){
    console.log('con este se wacha el '+fileName);
    this._downloadService.downloadFile(fileName).subscribe( res=> {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res));
        window.open(url);
      }
    });
  }
}
