import { Wrapper } from 'pages/Home';

import plug from '../../img/plug.jpg';
import { Item } from './Projects.styled';

export const Projects = () => (
  <Wrapper>
    <Item>
      <h2>WebSudio</h2>
      <div>
        <a href="https://a-novychenko.github.io/goit-markup-hw-08/">
          <img src={plug} alt="#" width="320" />
        </a>
        <p>
          It is a long estabItemshed fact that a reader will be distracted by
          the readable content of a page when looking at its layout. The point
          of using Lorem
        </p>
      </div>
    </Item>
    <Item>
      <h2>Ice Cream</h2>
      <div>
        <a href="https://makson03.github.io/team-project/">
          <img src={plug} alt="#" width="320" />
        </a>
        <p>
          It is a long estabItemshed fact that a reader will be distracted by
          the readable content of a page when looking at its layout. The point
          of using Lorem
        </p>
      </div>
    </Item>
    <Item>
      <h2>Filmoteka</h2>
      <div>
        <a href="https://a-novychenko.github.io/filmoteka-team-project/">
          <img src={plug} alt="#" width="320" />
        </a>
        <p>
          It is a long estabItemshed fact that a reader will be distracted by
          the readable content of a page when looking at its layout. The point
          of using Lorem
        </p>
      </div>
    </Item>
    <Item>
      <h2>ToDo</h2>
      <div>
        <a href="https://a-novychenko.github.io/to-do/">
          <img src={plug} alt="#" width="320" />
        </a>

        <p>
          It is a long estabItemshed fact that a reader will be distracted by
          the readable content of a page when looking at its layout. The point
          of using Lorem
        </p>
      </div>
    </Item>
  </Wrapper>
);
