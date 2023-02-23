// import { render } from '@testing-library/react';
import { RiAddBoxLine, RiDeleteBin6Line } from 'react-icons/ri';
import { Component } from 'react';
import { Item, List, ButtonWrapper, Button } from './ToDoList.styled';

export class ToDoListSection extends Component {
  state = {
    toDos: this.props.toDos,
    complited: [],
  };

  onDeleteToDo(id) {
    this.setState(prevStates => {
      return {
        toDos: prevStates.toDos.filter(toDo => toDo.id !== id),
      };
    });
  }
  onAddToDo(id) {
    this.setState(prevStates => {
      return {
        complited: [
          ...prevStates.complited,
          ...prevStates.toDos.filter(toDo => {
            if (prevStates.complited.find(el => el.id === id)) {
              return false;
            }
            return toDo.id === id;
          }),
        ],
      };
    });
  }

  logAdd() {
    console.log(this.state.complited);
  }

  render() {
    const { toDos } = this.state;
    // const { toDos } = this.props;

    return (
      <>
        <List>
          {toDos.map(({ id, complited, text }) => (
            <Item key={id} complited={complited}>
              <div>
                <h2>Title</h2>
                <p>{text}</p>
              </div>
              <ButtonWrapper>
                <Button
                  type="button"
                  onClick={() => this.onDeleteToDo(id)}
                  typeBtn={'del'}
                >
                  <RiDeleteBin6Line size={24} />
                </Button>
                <Button
                  type="button"
                  onClick={() => this.onAddToDo(id)}
                  typeBtn={'add'}
                >
                  <RiAddBoxLine size={24} />
                </Button>
              </ButtonWrapper>
            </Item>
          ))}
        </List>
        {this.state.complited.length !== 0 && (
          <>
            <h2>Complited</h2>
            <ul>
              {this.state.complited.map(({ id, text }) => (
                <li key={id}>
                  <div>
                    <h2>TitleCompl</h2>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}
