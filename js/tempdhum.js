//temp
fetch('https://blr1.blynk.cloud/external/api/get?token=APuw3xTam8hTBHUTbSpt-c36Hf2HO2x0&v0').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value1').innerHTML= completedata;
  });

//hum
fetch('https://blr1.blynk.cloud/external/api/get?token=APuw3xTam8hTBHUTbSpt-c36Hf2HO2x0&v1').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value2').innerHTML= completedata;
  });