import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.sass'],
})
export class ToasterComponent implements OnChanges {
  @Input() message: string = '';

  constructor() {}

  ngOnInit() {
    // Esconder o toaster inicialmente
    this.hideToaster();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Verifica se a mensagem foi alterada
    if (changes['message'] && !changes['message'].firstChange) {
      // Mostrar o toaster
      this.showToaster();

      // Se a mensagem foi alterada e não é a primeira mudança, destrói o toaster após 5 segundos
      setTimeout(() => {
        this.destroyToaster();
      }, 5000);
    }
  }

  // Método para mostrar o toaster
  showToaster() {
    const toasterElement = document.querySelector('.toaster');
    if (toasterElement) {
      toasterElement.classList.remove('fade-out'); // Remove a classe fade-out
    }
  }

  // Método para esconder o toaster
  hideToaster() {
    const toasterElement = document.querySelector('.toaster');
    if (toasterElement) {
      toasterElement.classList.add('fade-out'); // Adiciona a classe fade-out
    }
  }

  // Método para destruir o toaster
  destroyToaster() {
    const toasterElement = document.querySelector('.toaster')
    if (toasterElement)
      toasterElement.classList.add('fade-out')
    setTimeout(() => {
      this.message = ''
      this.hideToaster(); // Esconder o toaster novamente após destruí-lo
    }, 500)
  }  
}
