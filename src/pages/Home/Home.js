// import { Link, Outlet } from 'react-router-dom';
import myPhoto from '../../img/myPhoto.jpg';
import { Wrapper } from './Home.styled';

export const Home = () => (
  <main>
    <h1>Oleksandr Novychenko</h1>

    <Wrapper>
      <img src={myPhoto} alt="Oleksandr Novychenko" width="320" />
      <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
    </Wrapper>
    {/* <Wrapper>
      <div>
        <Link to="work">WORK</Link>
        <Link to="education">Education</Link>

        <Outlet />
      </div>
    </Wrapper> */}
  </main>
);
