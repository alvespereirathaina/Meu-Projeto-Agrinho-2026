const botao = document.getElementById("btn-simular");

botao.addEventListener("click", function(){

const cultura = document.querySelector('input[name="cultura"]:checked').value;

const producao = document.querySelector('input[name="producao"]:checked').value;

let gases;
let agua;
let solo;
let mensagem;

if(cultura === "milho" && producao === "sustentavel"){

gases = 30;
agua = 50;
solo = 25;

mensagem = "O uso de práticas sustentáveis reduz os impactos ambientais da produção de milho.";

}

else if(cultura === "milho" && producao === "convencional"){

gases = 45;
agua = 70;
solo = 40;

mensagem = "Métodos convencionais podem aumentar o consumo de recursos naturais.";

}

else if(cultura === "soja" && producao === "sustentavel"){

gases = 25;
agua = 35;
solo = 20;

mensagem = "O manejo sustentável contribui para uma produção mais equilibrada.";

}

else if(cultura === "soja" && producao === "convencional"){

gases = 40;
agua = 55;
solo = 35;

mensagem = "A ausência de práticas conservacionistas pode elevar os impactos ambientais.";

}

else if(cultura === "trigo" && producao === "sustentavel"){

gases = 28;
agua = 30;
solo = 22;

mensagem = "Boas práticas ajudam a preservar o solo e utilizar melhor a água.";

}

else{

gases = 42;
agua = 45;
solo = 35;

mensagem = "Métodos convencionais podem gerar maiores impactos quando não há manejo sustentável.";

}

document.getElementById("resultado").innerHTML = `

<div class="resultado-cards">  <div class="resultado-card"><h4>💨 Emissões de Gases</h4>

<p class="valor">${gases}%</p>

<p class="explicacao">
  Emissões associadas ao sistema de produção escolhido.
</p>

<div class="barra">
  <div class="preenchimento gases"></div>
</div>

  </div>  <div class="resultado-card"><h4>💧 Consumo de Água</h4>

<p class="valor">${agua}%</p>

<p class="explicacao">
  Estimativa comparativa do uso de recursos hídricos.
</p>

<div class="barra">
  <div class="preenchimento agua"></div>
</div>

  </div>  <div class="resultado-card"><h4>🌱 Impacto no Solo</h4>

<p class="valor">${solo}%</p>

<p class="explicacao">
  Relacionado à conservação e qualidade do solo.
</p>

<div class="barra">
  <div class="preenchimento solo"></div>
</div>

  </div></div><p style="margin-top:30px; text-align:center; font-weight:600;">
  ${mensagem}
</p>`;

setTimeout(() => {

const barras = document.querySelectorAll(".preenchimento");

barras[0].style.width = gases + "%";
barras[1].style.width = agua + "%";
barras[2].style.width = solo + "%";

}, 100);

});
let tamanhoFonte = 100;

function alterarFonte(valor){
  tamanhoFonte += valor * 10;

  if(tamanhoFonte < 80) tamanhoFonte = 80;
  if(tamanhoFonte > 150) tamanhoFonte = 150;

  document.documentElement.style.fontSize = tamanhoFonte + "%";
}

function alternarTema(){
  document.body.classList.toggle("dark-mode");

  const btn = document.getElementById("temaBtn");

  if(document.body.classList.contains("dark-mode")){
    btn.innerHTML = "☀️";
    localStorage.setItem("tema","escuro");
  }else{
    btn.innerHTML = "🌙";
    localStorage.setItem("tema","claro");
  }
}

window.addEventListener("load", () => {
  if(localStorage.getItem("tema") === "escuro"){
    document.body.classList.add("dark-mode");
    document.getElementById("temaBtn").innerHTML = "☀️";
  }
});
