import htmlLogo from '../../img/mystack/htmlLogo.png';
import cssLogo from '../../img/mystack/cssLogo.png';
import jsLogo from '../../img/mystack/jsLogo.png';
import reactLogo from '../../img/mystack/reactLogo.png';
import gitLogo from '../../img/mystack/gitLogo.png';
import { Wrapper } from 'pages/Home';
import { Item } from './Stack.styled';
import { Link, Outlet } from 'react-router-dom';

export const Stack = () => (
  <main>
    <Wrapper>
      <Item>
        {' '}
        <img src={htmlLogo} alt="HTML" width="320" />
      </Item>
      <Item>
        {' '}
        <img src={cssLogo} alt="HTML" width="320" />
      </Item>
      <Item>
        {' '}
        <img src={jsLogo} alt="HTML" width="320" />
      </Item>
      <Item>
        <img src={reactLogo} alt="HTML" width="320" />
      </Item>
      <Item>
        {' '}
        <img src={gitLogo} alt="HTML" width="320" />
      </Item>
    </Wrapper>
    <Wrapper>
      <div>
        <Link to="work">WORK</Link>
        <Link to="education">Education</Link>

        <Outlet />
      </div>
    </Wrapper>
  </main>
);
