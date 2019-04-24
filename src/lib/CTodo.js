import React from 'react';
import styled from 'styled-components';

class CTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      list: [],
      entry: ''
    };
  }
  componentDidMount() {
    if (localStorage.hasOwnProperty(`${this.props.title} list`)) {
      this.setState({
        list: JSON.parse(localStorage.getItem(`${this.props.title} list`)),
        title: this.props.title
      });
    } else {
      this.setState({ list: this.props.list, title: this.props.title });
      localStorage.setItem(
        `${this.props.title} list`,
        JSON.stringify(this.props.list)
      );
    }
  }
  handleAdd = () => {
    let list = this.state.list;
    list.push(this.state.entry);
    this.setState({ list, entry: '' });
    localStorage.setItem(`${this.props.title} list`, JSON.stringify(list));
  };
  handleInputChange = e => {
    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleDelete = e => {
    let list = this.state.list;
    list.splice(e.target.id, 1);
    this.setState({ list });
    localStorage.setItem(`${this.props.title} list`, JSON.stringify(list));
  };
  handleComplete = e => {
    if (e.target.className.includes('a10-checked')) {
      e.target.className = '';
    } else {
      e.target.className = 'a10-checked';
    }
  };
  componentWillUnmount() {
    localStorage.removeItem(`${this.props.title} list`);
  }
  render() {
    return (
      <div className='a10-color-todo'>
        <Header
          className='a10-header'
          style={{
            background: this.props.bkColor ? this.props.bkColor : '#FF9933'
          }}
        >
          <h2 className='a10-title' style={{ color: this.props.btnColor }}>
            {this.state.title}
          </h2>
          <TextInput
            name='entry'
            change={e => this.handleInputChange(e)}
            type='text'
            value={this.state.entry}
            placeholder={this.props.placeholder ? this.props.placeholder : null}
            ftcolor={this.props.ftColor ? this.props.ftColor : 'white'}
            bkcolor={this.props.inColor ? this.props.inColor : 'white'}
            width='100%'
          />
          <SecondaryButton
            value='Add'
            click={this.handleAdd}
            color={this.props.btnColor ? this.props.btnColor : 'white'}
            className='a10-addBtn'
          />
        </Header>
        <List id='myUL'>
          {this.state.list.map((li, i) => {
            return (
              <ListItem key={i} onClick={this.handleComplete}>
                <DelButton onClick={this.handleDelete} id={i}>
                  &otimes;
                </DelButton>
                {li}
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

export default CTodo;

const Header = styled.div`
  background-color: black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 40px;
  color: white;
  :after {
    content: '';
    display: table;
    clear: both;
  }
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
  // make the list items unselectable
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  :nth-child(odd) {
    background: #f9f9f9;
  }
  :last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  :hover {
    background: #ddd;
  }
  li.a10-checked {
    background: #888;
    color: #fff;
    text-decoration: line-through;
  }
  li.a10-checked::before {
    content: '';
    position: absolute;
    border-color: #fff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    top: 10px;
    left: 16px;
    transform: rotate(45deg);
    height: 15px;
    width: 7px;
  }
`;
const DelButton = styled.span`
  margin-right: 30px;
  z-index: 2;
`;

const TextInput = ({
  type = 'text',
  label,
  value,
  placeholder,
  change,
  name,
  ftcolor,
  bkcolor,
  width
}) => (
  <FormGroup className='a10-simple-form-group'>
    {label && <Label className='a10-simple-text-label'>{label}</Label>}
    <Input
      type={type}
      name={name}
      className='a10-simple-text-input'
      value={value}
      placeholder={placeholder}
      onChange={e => change && change(e)}
      ftColor={ftcolor}
      borderColor={bkcolor}
      width={width}
    />
  </FormGroup>
);
const FormGroup = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;
const Label = styled.label`
  display: block;
`;
const Input = styled.input`
  background: transparent;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: ${props => `2px solid ${props.borderColor || '#FF9933'}`}
  display: block;
  margin-bottom: 0.5rem;
  padding: 5px;
  font-size: 16px;
  font-weight: 400;
  width: ${props => props.width || '30%'};
  color: ${props => props.ftColor || 'black'};
`;

const SecondaryButton = ({ value, click, color }) => (
  <CustomSecondaryButton
    className='a10-secondary-button'
    onClick={e => click && click(e)}
    color={color}
  >
    {value}
  </CustomSecondaryButton>
);
const CustomSecondaryButton = styled.div`
  border: ${props => `2px solid ${props.color || '#FF9933'}`};
  border-radius: 5px;
  color: ${props => props.color || '#FF9933'}
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px;
  -webkit-transform: perspective(10px) translateZ(0);
  transform: perspective(10px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  :hover,
  :active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
`;
