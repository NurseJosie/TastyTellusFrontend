<template>
  <div class="main-container">
    <h1>Om Tasty Tellus</h1>

    <div class="info-container">
      <h3>
        Hur du äter är inte bara viktigt för din hälsa, du påverkar även miljön
        genom ditt val av mat.
      </h3>
      <p class="text">
        Denna sida erbjuder recept som är goda både för planeten och
        smaklökarna. <br />
        Recepten är lånade från Icas sida för klimatsmarta recept. Alltså recept
        med ett Co2-utsläpp på max 0,5kg per portion. Varje lånat recept på
        Tasty Tellus är märkt med en länk till dess källa. <br />
        Den mat vi äter står för en tredjedel av utsläppen av växthusgaser.
        Majoriteten av dessa utsläpp kommer från animaliska livsmedel såsom
        kött, fisk, ägg och mejeriprodukter. Negativa effekter av våra
        konsumtionsval är även övergödning, överfiskning och användning av
        kemiska bekämpningsmedel. Matens transportsträckor har också en negativ
        miljöpåverkan.En enkel och viktig åtgärd för att minska sina Co2-utsläpp
        är att välja mer vegetabiliska ingredienser till sin dagliga kost.
      </p>
      <br />
      <h3>Här är några tips på hur du minskar matens miljöpåverkan:</h3>
      <ul>
        <li>
          -Minska på köttportionen och ät mer vegetariskt. Det är bra att
          ersätta en del av köttet med vegetabilier som rotfrukter, spannmål,
          ärter och bönor.
        </li>
        <li>
          -Välj fisk som är fiskad eller odlad på ett hållbart sätt, till
          exempel miljömärkt fisk.
        </li>
        <li>
          -Välj frukt och grönt som tål att lagras, till exempel grova
          grönsaker, och välj känsligare frukter och grönsaker efter säsong.
        </li>
        <li>
          -Dra ner på godis, läsk, bakverk och snacks – de påverkar miljön utan
          att bidra med så mycket näring.
        </li>
        <li>
          -Minska svinnet - förvara maten rätt, planera dina inköp och ta hand
          om rester.
        </li>
      </ul>
      <a
        href="https://www.livsmedelsverket.se/matvanor-halsa--miljo/miljo/miljosmarta-matval2"
        target="_blank"
        >Livsmedelsverket</a
      >
    </div>
    <h2>Ett examensarbete av Josefin Persson .Net21 Campus Mölndal</h2>
  </div>
</template>

<style scoped>
.main-container {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h3 {
  margin-top: 1rem;
  font-weight: bold;
}

.text {
  margin-top: 0.5rem;
  padding: 0.5rem;
  width: 50%;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

ul {
  padding: 0.5rem;
  width: 50%;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

li {
  list-style: none;
  margin-bottom: 0.5rem;
}

a {
  text-decoration: none;
  color: black;
}
a:hover {
  font-weight: bold;
}
.info-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
