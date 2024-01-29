import { Component, signal } from '@angular/core';


interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

 public menuItems = signal<MenuItem[]>([
  { title: "Contador", route: "counter" },
  { title: "Usuario", route: "user-info" },
  { title: "Mutaciones", route: "properties" },
 ]);


 //esta es una propiedad con la manera tradicional, ahora con una señal(arriba)
  //public menuItems: MenuItem[] = [
  //{ title: "Contador", route: "counter" },
  //{ title: "Usuario", route: "user-info" },
  //{ title: "Mutaciones", route: "properties" },
 //];


}
