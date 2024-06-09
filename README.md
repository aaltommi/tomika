# Wedding application

Supports relatively secure way to collect visitor registrations to [Firebase](https://firebase.google.com/) without backend. Also offers wedding info website in multiple languages (instructions how it works coming later...).

## Create guests and registration links

Js scripts in /tools folder are helper scripts that are used when fetching invitation status etc. They are not use in the project.

- go to firebase console https://console.firebase.google.com/
- choose firestore databse
- choose `invited` collection
- add document, use name like `guestfirstnamelastname`
- go to rules and uncomment commented sections
- run `npx ts-node .\tools\invitationsStatus.js` in project root
- status.csv will be populated with the links to registration


## Local development

```
root/directory$ npm install && npm start
```



## Firestore setup

You need tree collections. `invited`, `submitted` and `visitors`. No data, documents, or fields are needed.

You need to update theses rules in rules tab in firestore console:

Rules:
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /visitors/{visitor} {
      allow create: if exists(/databases/$(database)/documents/invited/$(request.resource.data.invitationId))
      	&& !exists(/databases/$(database)/documents/submitted/$(request.resource.data.invitationId));
    }
    // Uncomment when fetching data with scripts under /tools
    //
    // match /visitors/{visitor} {
    // 	allow read: if true;
    // }
    // match /submitted/{submitted} {
    // 	allow read: if true;
    // }
    // match /invited/{invited} {
    // 	allow read: if true;
    // }
    match /submitted/{submitted} {
      allow create: if exists(/databases/$(database)/documents/invited/$(request.resource.id))
    }
  }
}
```


***It's important to remember to comment right after script is run. While uncommented all your data is available to public internet!***

## Deployment

I recommend installing [Firebase CLI](https://firebaseopensource.com/projects/firebase/firebase-tools/) to automate the setup.

For manual configuration see `/.github/workflows`. You need to add following secrets:
- GITHUB_TOKEN
- FIREBASE_SERVICE_ACCOUNT_LINTUJAMASLO

Further reading: https://firebase.google.com/docs/hosting/github-integration
## Usage

Feel free to fork, use and change at will. Hope this repo will help and inspire you!

## Deving

npm install

npm start

npm audit fix --force

now npm start works

created firebase project https://console.firebase.google.com/project/tomika-f62a1/overview


## Setting up the github action

install firebase cli `npm install -g firebase-tools`

firebase login


