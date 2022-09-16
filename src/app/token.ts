import {InjectionToken } from '@angular/core';

//create our own injectiontoken instence so naming confict will no more
export const API_TOKEN = new InjectionToken<string>('api');//this is gives us alias of api token
//also can do with same name 'api' and can use as many as more
// export const API_TOKEN2 = new InjectionToken<string>('api');