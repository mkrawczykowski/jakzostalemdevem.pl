import React, {useState} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {Container, Row, Col} from '../Grid/Grid';
import Logo from '../Logo/Logo';
import * as styles from './MainMenu.module.scss';

const Mainmenu = () =>{
  const [navStateClass, setNavStateClass] = useState('');
  const changingNavStateClass = () => {
    navStateClass.length > 0 ? setNavStateClass('') : setNavStateClass('active');
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
          <nav className={[styles.mainNav, styles[navStateClass]].join(' ')}>
            <Logo></Logo>
            <ul className={styles.mainMenu}>
              {mainmenuItems.map(link => {
                return(
                  <li key={link.id} className={styles.mainMenu__item}><a href={link.uri} className={styles.mainMenu__link}>{link.label}</a></li>
                )
              })
              }
            </ul>
          </nav>
          <div className={styles.mainNav__hamburger} onClick={changingNavStateClass}>
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