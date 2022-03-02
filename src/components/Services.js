import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktail',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima.',
      },
      {
        icon: <FaHiking />,
        title: 'Endless hiking',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttle',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima.',
      },
      {
        icon: <FaBeer />,
        title: 'strongest beer',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima.',
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
