//ss1
fetch('https://blr1.blynk.cloud/external/api/get?token=APuw3xTam8hTBHUTbSpt-c36Hf2HO2x0&v2').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value1').innerHTML= completedata;
  });

//ss2
  fetch('https://blr1.blynk.cloud/external/api/get?token=APuw3xTam8hTBHUTbSpt-c36Hf2HO2x0&v3').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value2').innerHTML= completedata;
  });

//ss3
  fetch('https://blr1.blynk.cloud/external/api/get?token=APuw3xTam8hTBHUTbSpt-c36Hf2HO2x0&v4').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value3').innerHTML= completedata;
  });
