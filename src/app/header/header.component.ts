import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(CartComponent,
      {
        position: { top: '80px', right: '20px' },
        // hasBackdrop: false,
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  x: any = null
  openMobileLinks() {
    this.x = document.getElementById("moblinks");
    if (this.x.style.display === "none") {
      this.x.style.display = "flex";
    }
    else
      this.x.style.display = "none";
  }

  closeLinks() {
    this.x = document.getElementById("moblinks");
    this.x.style.display = "none";
  }
}
