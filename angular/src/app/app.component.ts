import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    const letters = document.querySelectorAll('#main #word div')
    
    letters.forEach((letter, idx) => {
      
      letter.addEventListener('mouseover', (e) => {
        e.target['classList'].add('active');
      })
      letter.addEventListener('click', (e) => {
        e.target['classList'].add('active');
      })
      letter.addEventListener('animationend', (e) => {
        e.target['classList'].remove('active')
      })
      
      // Initial animation
      setTimeout(() => {
        letter['classList'].add('active');
      }, 750 * (idx + 1))
    })
  }

  onOpenImg() {
    document.getElementById('img').style.width = "1000px"
    document.getElementById('close').style.fontSize = "100px"
    document.getElementById('footer').style.visibility = "hidden"
  }

  onCloseImg() {
    document.getElementById('img').style.width = "0"
    document.getElementById('close').style.fontSize = "0"
    document.getElementById('footer').style.visibility = "visible"
  }

  onAnswer(answer: boolean) {
    alert(answer ? 'Por que será que não consigo tirar você da minha cabeça?' : 'Vou perguntar assim mesmo... \n Por que será que não consigo tirar você da minha cabeça?')
  }
}
