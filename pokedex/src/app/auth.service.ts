import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    toasterMessage: string = '';
    toasterStatus: 'authorized' | 'unauthorized' = 'unauthorized';
    
    private authorized: boolean = false;

    toggleAuth(): void {
        this.authorized = !this.authorized;
        this.updateToasterMessage();
    }

    isAuthorized(): boolean {
        return this.authorized;
    }

    updateToasterMessage(): void {
        if (this.authorized) {
            this.toasterMessage = 'Autorizado!';
            this.toasterStatus = 'authorized';
        } else {
            this.toasterMessage = 'Não autorizado!';
            this.toasterStatus = 'unauthorized';
        }
    }
}
