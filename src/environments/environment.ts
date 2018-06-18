// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDP6BJ-lRGQx1bTlPFIHVUyLe1WrNEjZ7c',
    authDomain: '<your-project-authdomain>',
    databaseURL: 'https://buildstacks-a3a59.firebaseio.com',
    projectId: 'buildstacks-a3a59',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '739473078843'
  }
};
