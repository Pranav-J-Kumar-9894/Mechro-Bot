fetch('https://blr1.blynk.cloud/external/api/isHardwareConnected?token=APuw3xTam8hTBHUTbSpt-c36Hf2HO2x0')
.then((data)=>{
  return data.json();
}).then((stat)=>{
  console.log(stat);
  document.getElementById('value').innerHTML = stat ;
})