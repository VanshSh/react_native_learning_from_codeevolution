### Learning **Notes**
****
- Border Radius => Does not work on Text in the IOS but works on Android. So to apply the border radius on in IOS apply it on the View component.

- Box shadown does not work on Android. But androidElevation in the alternative for the box shadow in the Android

- In react native there is no inheritance from View Tag to the Text tag

- View has display flex by default
- For Platform specific code for small usecases:
  
  ```
  ...Platfrom.select({
  ios:{},
  android:{} 
   })

   OR

   Platfrom.OS === 'android' ? "red" : "green"

  ```

- Platform specific code for big usecases:
  - Create files with the extensions
    - file.android.js
    - file.ios.js
    - Import it as usual component without extensions RN will figure that out