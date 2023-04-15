import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

	showNavigationIndicators = false;
  
   ELEMENT_DATA: any[] = [
    {horario:"06:00",seg:"Taekwondo",ter:"Kick Boxe",qua:"Taekwondo",qui:"Kick Boxe",sex:"Taekwondo" },
    {horario:"07:00",seg:"Muay Thay",ter:"Boxe",qua:"Muay Thay",qui:"Boxe",sex:"Muay Thay" },
    {horario:"08:00",seg:"Taekwondo",ter:"Karate",qua:"Taekwondo",qui:"Karate",sex:"Taekwondo" },
    {horario:"15:00",seg:"Taekwondo",ter:"Boxe",qua:"Taekwondo",qui:"Boxe",sex:"Taekwondo" },
    {horario:"16:00",seg:"Muay Thay",ter:"Muay Thay",qua:"Muay Thay",qui:"Muay Thay",sex:"Muay Thay" },
    {horario:"17:00",seg:"Jiu Jitsu",ter:"Kick Boxe",qua:"Jiu Jitsu",qui:"Kick Boxe",sex:"Jiu Jitsu" },
    {horario:"19:00",seg:"Karate",ter:"Boxe",qua:"Karate",qui:"Karate",sex:"Boxe" },
    {horario:"20:00",seg:"Taekwondo",ter:"Kick Boxe",qua:"Taekwondo",qui:"Kick Boxe",sex:"Taekwondo" },
    {horario:"21:00",seg:"Jiu Jitsu",ter:"Jiu Jitsu",qua:"Jiu Jitsu",qui:"Jiu Jitsu",sex:"Jiu Jitsu" },
    

  ]; 
  formSite!: FormGroup;


  displayedColumns: string[] = ['horario', 'seg', 'ter', 'qua','qui','sex'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar,config: NgbCarouselConfig) { 

  }
  
  ngOnInit(){
    this.formSite = this.fb.group({
      name:[""],
      email:[""],
      mensagem:['']

    })

  }
  submit(){

      this._snackBar.open("Mensagem enviado com sucesso", "OK")
    
  }

}
