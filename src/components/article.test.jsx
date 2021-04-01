import React from "react";
import { render } from "@testing-library/react";
import Article from "./article";

let titleProps = "New cat born";
let paragraphContent = `<p>Sleeps on my head this cat happen now, it was too purr-fect!!!. Munch on tasty moths. Sleep over your phone and make cute snoring noises hey! you there, with the hands or eat an easter feather as if it were a bird then burp victoriously, but tender ask to be pet then attack owners hand jump off balcony, onto stranger's head yet the cat was chasing the mouse. Jump up to edge of bath, fall in then scramble in a mad panic to get out lie on your belly and purr when you are asleep chill on the couch table drool Gate keepers of hell or kick up litter. Slap the dog because cats rule hate dogs do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life, so pet my belly, you know you want to; seize the hand and shred it! cat fur is the new black but scratch the postman wake up lick paw wake up owner meow meow. Destroy house in 5 seconds love blinks and purr purr purr purr yawn eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter run outside as soon as door open.</p>`;

describe("Display of an article", () => {
  test("Title is display when a props is given", () => {
    const { getByTestId } = render(<Article title={titleProps} />);

    let title = getByTestId("title");

    expect(title.textContent).toContain(titleProps);
  });

  test("When a children html node is gaved he use to be display", () => {
    const { getByTestId } = render(<Article>{paragraphContent}</Article>);

    const content = getByTestId("content");

    expect(content.textContent).toContain(paragraphContent);
  });

  test("When a title and a children html node are gaved there are both be display", () => {
    const { getByTestId } = render(
      <Article title={titleProps}>{paragraphContent}</Article>
    );

    let title = getByTestId("title");
    expect(title.textContent).toContain(titleProps);

    const content = getByTestId("content");
    expect(content.textContent).toContain(paragraphContent);
  });
});
