import {Component, OnInit} from "@angular/core";
import {ScreenChange} from "./services/screen.change.service";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit{
    public table1 = [];
    public table2 = [];
    public initScreenLevel = 0;
    public noOfAlphabets = 0;
    public noOfTextFields = [];

    constructor(public screenChange: ScreenChange) {
        this.table1[0] = ['A', 'B', 'C', 'D', 'E'];
        this.table1[1] = ['F', 'G', 'H', 'I', 'J'];
        this.table1[2] = ['K', 'L', 'M', 'N', 'O'];
        this.table1[3] = ['P', 'Q', 'R', 'S', 'T'];
        this.table1[4] = ['U', 'V', 'W', 'X', 'Y'];
        this.table1[5] = ['Z'];
        this.table2[0] = ['A', 'F', 'K', 'P', 'U', 'Z'];
        this.table2[1] = ['B', 'G', 'L', 'Q', 'V'];
        this.table2[2] = ['C', 'H', 'M', 'R', 'W'];
        this.table2[3] = ['D', 'I', 'N', 'S', 'X'];
        this.table2[4] = ['E', 'J', 'O', 'T', 'Y'];
    }

    ngOnInit(){
        this.screenChange.screenChange$.subscribe(data =>{
            this.initScreenLevel = data;
        });
        this.screenChange.saveNoAlphabets$.subscribe(data =>{
            this.noOfAlphabets = data;
            for(var I=1; I<=this.noOfAlphabets; I++){
                this.noOfTextFields.push(I);
            }
        });
    }

    public start(){
        this.screenChange.makeScreenChange(1);
    }

    public saveNumber(value){
        this.screenChange.saveNoAlphabets(value);
        this.screenChange.makeScreenChange(2);
    }

}
