import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        if (error instanceof HttpErrorResponse) {
            // Send error to API/ show in popup
            console.log(error.message);
        } else {
            console.log(error);
        }
    }
}