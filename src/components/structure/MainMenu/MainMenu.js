import React, {useState} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Container, Row, Col} from '../Grid/Grid';
import * as styles from './MainMenu.module.scss';

const Mainmenu = () =>{
  const [menuStateClass, setMenuStateClass] = useState('');
  const changingMenuStateClass = () => {
    console.log('changing state!');
    console.log(menuStateClass);
    menuStateClass.length > 0 ? setMenuStateClass('') : setMenuStateClass('active');
  }

  const mainMenuQuery = useStaticQuery(graphql`
    query{
      wpgraphql {
        menu(id: "dGVybTozNw==") {
          menuItems {
            nodes {
              label
              uri
              id
            }
          }
        }
      }
    }
  `)

  const mainmenuItems = mainMenuQuery.wpgraphql.menu.menuItems.nodes;

  return(
    <Container>
      <Row>
        <Col classes="col col-xs-12 col-lg-1"></Col>
        <Col classes="col col-xs-12 col-lg-10">
          <nav className={styles.mainNav}>
            <h1 className={styles.mainNav__logo}>jakzostalemdevem.pl</h1>
            <ul className={[styles.mainMenu, styles[menuStateClass]].join(' ')}>
              {mainmenuItems.map(link => {
                return(
                  <li key={link.id} className={styles.mainMenu__item}><a href={link.uri} className={styles.mainMenu__link}>{link.label}</a></li>
                )
              })
              }
            </ul>
          </nav>
          <div className={styles.mainNav__hamburger} onClick={changingMenuStateClass}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Col>
        <Col classes="col col-xs-12 col-lg-1"></Col>
      </Row>
    </Container>
  )
}

export default Mainmenu;