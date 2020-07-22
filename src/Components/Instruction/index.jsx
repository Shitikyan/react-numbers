import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import useHideOnSize from '../../Shared/Hooks/hideOnSize';
import { InstructionComponent, Text } from './Styles.js';

const Instruction = (props) => {
  useHideOnSize(670, 'instructions');

  return (
    <InstructionComponent id="instructions">
      <PerfectScrollbar className={`Instruction ${props.style}`}>
        <Text>Please create a responsive React application (using javascript or typescript) that displays a list of cards on a page as shown below.
        There is a fixed-width pane on the right side of the window that remains attached to the right side when the user re-sizes. Inside the pane, please paste a formatted display of these instructions. And if the browser width is small, hide the pane completely.
        There is a fixed-height toolbar on the top of the window that has buttons.
        There is a fixed-height footer on the bottom of the window that just shows the text "footer".
        The main center portion of the window is the card container. It should start out with zero cards. Cards are only added when the user clicks 'add card' in the top toolbar. It has a vertical scrollbar which can be used if there are too many cards to display at once. It lays out the cards in rows, wrapping as needed. In this mockup only 2 cards are shown per row, but if the browser is wider, 3 or more cards might fit in a row. If narrower, maybe only 1 card would be visible.
        Each card has a set pixel size, such as 300px by 250px, but you can decide what size you wish to use. Upon instantiation, a card should be given a random number between 0 and 100 and display it in the center of the card.
        Each card has a button in the top-right corner which can be used to delete the card.
      If the user clicks the 'sort cards' button at the top of the page, please sort the cards in order of the number that is shown in the center of each card.
      Please create a responsive React application (using javascript or typescript) that displays a list of cards on a page as shown below.
        There is a fixed-width pane on the right side of the window that remains attached to the right side when the user re-sizes. Inside the pane, please paste a formatted display of these instructions. And if the browser width is small, hide the pane completely.
        There is a fixed-height toolbar on the top of the window that has buttons.
        There is a fixed-height footer on the bottom of the window that just shows the text "footer".
        The main center portion of the window is the card container. It should start out with zero cards. Cards are only added when the user clicks 'add card' in the top toolbar. It has a vertical scrollbar which can be used if there are too many cards to display at once. It lays out the cards in rows, wrapping as needed. In this mockup only 2 cards are shown per row, but if the browser is wider, 3 or more cards might fit in a row. If narrower, maybe only 1 card would be visible.
        Each card has a set pixel size, such as 300px by 250px, but you can decide what size you wish to use. Upon instantiation, a card should be given a random number between 0 and 100 and display it in the center of the card.
        Each card has a button in the top-right corner which can be used to delete the card.
      If the user clicks the 'sort cards' button at the top of the page, please sort the cards in order of the number that is shown in the center of each card.</Text>
      </PerfectScrollbar>
    </InstructionComponent>
  )
};

export default Instruction;