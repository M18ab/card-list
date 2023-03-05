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
        <p slot="bing">This is a picture of a bing user</p>
      </professor-card>
      <professor-card
        author = 'The Italian Stallion';
        professorName = 'Professor David Hozza';
        funFact = 'This is a picture of the best Cyber professor at PSU';
        topText = 'Splunk';
        bottomText = 'Is Not Fun';
        imgURL = 'https://ist.psu.edu/sites/default/files/directory/Hozza-David.jpg';
        description = 'More info';>
        <p slot="bing">Professor Hozza teaches SRA 221 and CYBER 262</p>
      </professor-card>
      <professor-card
        author = 'Your boy';
        professorName = 'Professor Vanessa McLaughlin';
        funFact = 'This is a picture of a CAS 100 professor at PSU';
        topText = 'Public Speaking';
        bottomText = 'Or Death';
        imgURL = 'https://npr.brightspotcdn.com/dims4/default/c879421/2147483647/strip/true/crop/4032x3024+0+0/resize/880x660!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwpsu%2Ffiles%2F201912%2FIMG-1789.jpg';
        description = 'The deets';>
        <p slot="bing">She's also an influencer @vanessadotfitness</p>
      </professor-card>
      <professor-card
        author = 'The Man Himself';
        professorName = 'Professor Cory Raupers';
        funFact = 'This is a picture of a Business professor at State College Area High School';
        topText = 'Let us get down to';
        bottomText = 'BUSINESS';
        imgURL = 'https://www.scasd.org/cms/lib/PA01000006/Centricity/Domain/1139/RaupersCory.jpg';
        description = 'Info';>
        <p slot="bing">He's also a coach of the high school football team</p>
      </professor-card>
      <professor-card
        author = 'Spoonsor';
        professorName = 'Professor Daniel Welch';
        funFact = 'This is a picture of a programming prof at PSU';
        topText = 'There is no meme';
        bottomText = 'Nobody likes Java';
        imgURL = 'https://ist.psu.edu/sites/default/files/directory/Welch-Dan.jpg';
        description = 'Some details';>
        <p slot="bing">Please don't make me take another Java course Andrew Sears</p>
      </professor-card>
    `;
  }
}

customElements.define('card-list', CardList);