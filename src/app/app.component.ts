import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskList:string[] = [];
  editValue:string='';
  previousValue:string='';
  disaableButton:boolean=false;
  favouriteList: { task: string; completed: boolean ;id:number}[] = [
    {
    task:'firsttask',completed:false,id:2
  },
  {
    task:'aaa',completed:false,id:3
  },
  {
    task:'ppp',completed:false,id:1
  }
];
isValidInput = true;
showError = false;
validateInput(event: any): void {

  if(event.target.value==''){
    this.isValidInput=false;
    this.showError=false;
  }
  //const inputRegex = /^[a-zA-Z]+$/;
 // this.isValidInput = inputRegex.test(event.target.value);
  //this.showError = true;
//   if(!this.isValidInput)
// {
//   this.showError = true;
// }
 // console.log( this.isValidInput)
}
  
AddTask(task: string){
  const inputRegex = /^[a-zA-Z]+$/;
  this.isValidInput = inputRegex.test(this.editValue);
  if(!this.isValidInput)
  {
    
    this.showError = true;
    return;
  }
    if(this.taskList.includes(task)){
      alert("task already exist")
      return;
    }
    this.taskList.push(task);
    this.editValue='';
  }
   DeleteTask(index:number)
   {
   // let index=this.taskList.indexOf(task)
      this.taskList.splice(index,1)
  }
  // public UpdaateTask(index:number){
  //   const updatedTask=
  // }
   UpdateTask(task: string) {
   // this.editValue = task;
    let index=this.taskList.indexOf(this.previousValue);
console.log(index)
   // if (this.editValue !== undefined && this.editValue !=='') {
      this.taskList[index] = task;
      this.editValue='';
      this.disaableButton=false;
    //}
  }
  editTask(task:string){
    this.editValue = task;
    this.previousValue=task;
    this.disaableButton=true;
  }
  makeFavourite(task:string){
  const taskObject = { task: task, completed: false,id:Math.floor(Math.random() * 10) };
 
  if (this.favouriteList.some(fav => fav.task === taskObject.task)) {
    alert("task already exist")
    console.log("task",taskObject);
    return;
  }
  this.favouriteList.push(taskObject);
  console.log( this.favouriteList);
  }
  deleteSelectedFavourites() {
    // this.favouriteList = this.favouriteList.filter(fav => !fav.completed);
    for (let i = this.favouriteList.length - 1; i >= 0; i--) {
    //  for (let i=0;i<this.favouriteList.length; i++) {
      if (this.favouriteList[i].completed) {
        console.log(this.favouriteList[i])
       // let index=this.favouriteList.indexOf('cc')
        this.favouriteList.splice(i, 1);
      }
    }
    console.log(this.favouriteList);
   // this.favouriteList = this.favouriteList.splice(this.fav.completed,1);
  }
  hasSelectedFavourites(): boolean {
    return this.favouriteList.some(fav => fav.completed);
  }
  
  filterbyAz(favouriteList: any[]){
    var sortedAtoZ= favouriteList.sort((a,b)=>{
      if(a.task>b.task){
        return 1;
      }else{
        return -1;
      }
    });
  //  console.log(sortedAtoZ)
    return sortedAtoZ;
//return favouriteList.sort();

   }
   filterbyID(favouriteList: any[]){
    var sortedbyID= favouriteList.sort((a,b)=>{
      if(a.id>b.id){
        return 1;
      }else{
        return -1;
      }
    });
  //  console.log(sortedAtoZ)
    return sortedbyID;
   }
}
