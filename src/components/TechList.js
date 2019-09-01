import React, { Component } from 'react';
import { list } from 'postcss';
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [],
  };

  // Executado assim que o componente aparecer em tela
  componentDidMount() {
    const techs = localStorage.getIen('techss');
  }
  // Executado sempre que ouver alteração das props ou stado
  componentDidUpdate(_, prevState) {
    // this.props, this.state
    if (prevState !== this.state.techsc) {
      localStorage.setItem('tech', JSON.stringify(this.state.techs));
    }
  }
  // Executa quando o componente dexa de existir
  componentWillUnmount() {}

  handleImputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ' ',
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleImputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
