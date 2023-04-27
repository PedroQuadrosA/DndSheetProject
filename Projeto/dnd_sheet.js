function updateModifiers(){
        //converter o ability score em  ability modifier

        //converter o ability score da força
        var strScore = document.getElementById("strScore").value;
        document.getElementById("strMod").value = Math.floor((strScore - 10)/2);

        //converter o ability score da destreza
        var dexScore = document.getElementById("dexScore").value;
        document.getElementById("dexMod").value = Math.floor((dexScore - 10)/2);

        //converter o ability score da constituição
        var conScore = document.getElementById("conScore").value;
        document.getElementById("conMod").value = Math.floor((conScore - 10)/2);

        //converter o ability score da inteligência
        var intScore = document.getElementById("intScore").value;
        document.getElementById("intMod").value = Math.floor((intScore - 10)/2);

        //converter o ability score da sabedoria
        var wisScore = document.getElementById("wisScore").value;
        document.getElementById("wisMod").value = Math.floor((wisScore - 10)/2);

        //converter o ability score do carisma
        var chaScore = document.getElementById("chaScore").value;
        document.getElementById("chaMod").value = Math.floor((chaScore - 10)/2);

        setSkills();
}

function updateProfBonus(){
    //atualizar o bonus da proficiencia baseado no level do player
    

    var playerLevel = parseInt(document.getElementById("playerLevel").value);

    //fazemos os ifs do maior para o menor pq o código vai ler de cima para baixo.
    if (playerLevel >= 17) {
        document.getElementById("profBonus").value = 6;
    } else if (playerLevel >= 13) {
        document.getElementById("profBonus").value = 5;
    } else if (playerLevel >= 9) {
        document.getElementById("profBonus").value = 4;
    } else if (playerLevel >= 5) {
        document.getElementById("profBonus").value = 3;
    } else {
        document.getElementById("profBonus").value = 2;
    }

}

function setSkills(){
    var profBonus = parseInt(document.getElementById("profBonus").value);
    var strMod = parseInt(document.getElementById("strMod").value);
    var dexMod = parseInt(document.getElementById("dexMod").value);
    var conMod = parseInt(document.getElementById("conMod").value);
    var intMod = parseInt(document.getElementById("intMod").value);
    var wisMod = parseInt(document.getElementById("wisMod").value);
    var chaMod = parseInt(document.getElementById("chaMod").value);
   
   if (document.getElementById("acroProf").checked == true) {
     document.getElementById("acroScore").value = dexMod + profBonus;
   } else {
     document.getElementById("acroScore").value = dexMod;
   }

   if (document.getElementById("aniHanProf").checked == true) {
    document.getElementById("aniHanScore").value = wisMod + profBonus;
  } else {
    document.getElementById("aniHanScore").value = wisMod;
  }

  if (document.getElementById("arcaProf").checked == true) {
    document.getElementById("arcaScore").value = intMod + profBonus;
  } else {
    document.getElementById("arcaScore").value = intMod;
  }

  if (document.getElementById("athleProf").checked == true) {
    document.getElementById("athleScore").value = strMod + profBonus;
  } else {
    document.getElementById("athleScore").value = strMod;
  }

  if (document.getElementById("deceProf").checked == true) {
    document.getElementById("deceScore").value = chaMod + profBonus;
  } else {
    document.getElementById("deceScore").value = chaMod;
  }

  if (document.getElementById("hisProf").checked == true) {
    document.getElementById("hisScore").value = intMod + profBonus;
  } else {
    document.getElementById("hisScore").value = intMod;
  }

  if (document.getElementById("intiProf").checked == true) {
    document.getElementById("intiScore").value = chaMod + profBonus;
  } else {
    document.getElementById("intiScore").value = chaMod;
  }

  if (document.getElementById("inveProf").checked == true) {
    document.getElementById("inveScore").value = intMod + profBonus;
  } else {
    document.getElementById("inveScore").value = intMod;
  }

  if (document.getElementById("medProf").checked == true) {
    document.getElementById("medScore").value = wisMod + profBonus;
  } else {
    document.getElementById("medScore").value = wisMod;
  }

  if (document.getElementById("natProf").checked == true) {
    document.getElementById("natScore").value = intMod + profBonus;
  } else {
    document.getElementById("natScore").value = intMod;
  }

  if (document.getElementById("percProf").checked == true) {
    document.getElementById("percScore").value = wisMod + profBonus;
  } else {
    document.getElementById("percScore").value = wisMod;
  }

  if (document.getElementById("perfProf").checked == true) {
    document.getElementById("perfScore").value = chaMod + profBonus;
  } else {
    document.getElementById("perfScore").value = chaMod;
  }

  if (document.getElementById("persProf").checked == true) {
    document.getElementById("persScore").value = chaMod + profBonus;
  } else {
    document.getElementById("persScore").value = chaMod;
  }

  if (document.getElementById("reliProf").checked == true) {
    document.getElementById("reliScore").value = intMod + profBonus;
  } else {
    document.getElementById("reliScore").value = intMod;
  }

  if (document.getElementById("sleHanProf").checked == true) {
    document.getElementById("sleHanScore").value = dexMod + profBonus;
  } else {
    document.getElementById("sleHanScore").value = dexMod;
  }

  if (document.getElementById("steaProf").checked == true) {
    document.getElementById("steaScore").value = dexMod + profBonus;
  } else {
    document.getElementById("steaScore").value = dexMod;
  }

  if (document.getElementById("survProf").checked == true) {
    document.getElementById("survScore").value = wisMod + profBonus;
  } else {
    document.getElementById("survScore").value = wisMod;
  }
}

function playerLevelChange(){
    //aqui temos todas as possiveis mudanças que podem acontecer caso o player mude de level
    updateProfBonus();
    updateModifiers();
    setSkills();
}