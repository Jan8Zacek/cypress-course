 // TODO: Implementujte podmienku
  // Ak je vyska vacsia ako 180 cm tak som vysoky
  // Ak je vyska mensia ako 180 ale vacsia ako 170 cm tak som stredne vysoky
  // Ak je vyska mensia ako 170 ale vacsia ako 160 cm tak som nizky
  // Ak je vyska mensia ako 160 cm tak som malinky
  // TODO: Implementujte podmienky


  //switch nebere logicke operace
  let vyska = 165;
  console.log (vyska < 170 && vyska >= 160);
    

  switch (vyska) {
    case (vyska >= 180):
        console.log ("Jsem vysoky");
        break;
    case (vyska < 180 && vyska >= 170):
        console.log ("Jsem stredne vysoky");
        break;
    case (vyska < 170 && vyska >= 160):
        console.log ("Jsem nizky");
        break;
    case (vyska < 160):
        console.log ("Jsem nizky");
        break;
    default:
        console.error("Nemam vysku");
        break;
  };
