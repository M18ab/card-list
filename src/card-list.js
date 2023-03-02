import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js"; 
import "spenserprofessor-card/src/professor-card.js"; 

export class CardList extends LitElement {
  static properties = {

  };

  constructor() {
    super();
  }

  render() {
    return html`
      <professor-card>
      </professor-card>
      <professor-card
        author = 'Spenser McLaughlin';
        professorName = 'Professor David Hozza';
        funFact = 'This is a picture of the best Cyber professor at PSU';
        topText = 'Splunk';
        bottomText = 'Is Not Fun';
        imgURL = 'https://ist.psu.edu/sites/default/files/directory/Hozza-David.jpg';
        description = 'Details';
      ></professor-card>
      <professor-card>
      </professor-card>
      <professor-card>
      </professor-card>
      <professor-card>
      </professor-card>
    `;
  }
}

customElements.define('card-list', CardList);