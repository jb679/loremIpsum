// lorem text
const text = [
    `I'm baby gastropub pitchfork ugh narwhal, tumeric mixtape pop-up crucifix listicle tattooed. Swag narwhal tumeric lomo chillwave, letterpress irony squid. Copper mug live-edge scenester ethical, affogato meditation flannel franzen swag. Flexitarian whatever jianbing, pickled umami celiac selvage locavore mixtape sus four loko mukbang. Same tofu chicharrones, fam gochujang aesthetic pinterest street art next level tote bag pitchfork coloring book cold-pressed la croix offal. Sus stumptown solarpunk pinterest, semiotics mumblecore tote bag palo santo gorpcore retro neutra irony food truck copper mug mustache.`,
    `Slow-carb gastropub poke, shaman truffaut kitsch chia plaid. Wolf vice tilde gochujang, mustache cardigan hoodie unicorn VHS next level sartorial marfa banjo migas. Mumblecore man bun polaroid vexillologist beard farm-to-table. Sustainable locavore edison bulb bodega boys flexitarian raw denim. Keffiyeh slow-carb synth kale chips, austin art party raw denim yuccie af blue bottle hoodie. Chicharrones cornhole kale chips farm-to-table twee yr glossier keffiyeh sartorial jianbing prism health goth taxidermy. Listicle DIY hot chicken palo santo kogi.`,
    `Slow-carb gastropub poke, shaman truffaut kitsch chia plaid. Wolf vice tilde gochujang, mustache cardigan hoodie unicorn VHS next level sartorial marfa banjo migas. Mumblecore man bun polaroid vexillologist beard farm-to-table. Sustainable locavore edison bulb bodega boys flexitarian raw denim. Keffiyeh slow-carb synth kale chips, austin art party raw denim yuccie af blue bottle hoodie. Chicharrones cornhole kale chips farm-to-table twee yr glossier keffiyeh sartorial jianbing prism health goth taxidermy. Listicle DIY hot chicken palo santo kogi.`,
    `Pop-up voluptate polaroid distillery shaman. Blackbird spyplane cloud bread solarpunk butcher reprehenderit wayfarers fashion axe. Id locavore pickled listicle organic ex. Sint ethical listicle lomo, la croix flannel artisan narwhal blackbird spyplane.`,
    `Selvage meh direct trade, austin vibecession cupidatat enamel pin irony small batch blackbird spyplane. Ut pug JOMO ad. Pork belly vice yr chicharrones. Adaptogen flexitarian mustache wayfarers, nulla af celiac man braid quinoa neutral milk hotel aliqua fanny pack mollit flannel. Vinyl cardigan poutine, disrupt tattooed man bun mollit adaptogen air plant live-edge. Locavore cardigan schlitz wayfarers taxidermy gorpcore aesthetic wolf pour-over mollit.`,
    `Vibecession tonx dolor lyft af, sed kombucha. Mukbang mlkshk kickstarter, kale chips praxis echo park sint meditation. Brunch swag fit hammock bodega boys mukbang. Microdosing williamsburg velit est sartorial cliche keytar gochujang JOMO offal ullamco ad lorem grailed. Excepteur health goth flannel beard thundercats wayfarers narwhal pariatur cloud bread marxism normcore. Slow-carb ea sriracha, sint everyday carry brunch vinyl iPhone hammock ex schlitz incididunt in duis.`,
    `Celiac tumblr poutine gastropub, dolor pug disrupt sus YOLO unicorn lorem trust fund roof party post-ironic. Wayfarers pinterest edison bulb, pop-up hell of 8-bit kale chips cupidatat ramps keytar in id aute. Selfies leggings narwhal aute actually. Taxidermy aliqua ut kinfolk incididunt, master cleanse cupidatat consequat. Blue bottle esse disrupt bitters, iceland shaman sed mukbang pitchfork celiac cold-pressed squid copper mug solarpunk flannel. VHS pour-over pitchfork cred, twee synth asymmetrical keytar deserunt aute tilde scenester +1 heirloom. Readymade sartorial in authentic.`,
    `Elit plaid chambray, hashtag ethical kale chips craft beer flexitarian. Copper mug grailed poutine forage crucifix, praxis biodiesel. Put a bird on it cillum gastropub, schlitz yes plz iPhone lumbersexual. Paleo twee celiac, kogi magna sriracha bitters cupidatat narwhal lyft.`,
    `Selvage meh direct trade, austin vibecession cupidatat enamel pin irony small batch blackbird spyplane. Ut pug JOMO ad. Pork belly vice yr chicharrones. Adaptogen flexitarian mustache wayfarers, nulla af celiac man braid quinoa neutral milk hotel aliqua fanny pack mollit flannel. Vinyl cardigan poutine, disrupt tattooed man bun mollit adaptogen air plant live-edge. Locavore cardigan schlitz wayfarers taxidermy gorpcore aesthetic wolf pour-over mollit.`
];


const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  // A click on a form submit button – initiates its submission to the server.

  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});

