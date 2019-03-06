import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';

@Injectable()
export class ConfigService {
  snackConfig = new MatSnackBarConfig();
  apiUrl = '';
  httpCacheDuration = 1000; // 1 seconds
  httpDelay = 10; // http delay

  constructor() {

  }
}
