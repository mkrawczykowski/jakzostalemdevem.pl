import React from 'react';
import {Container, Row, Col} from '../../structure/Grid/Grid';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import * as styles from './HPSlider.module.scss';

import 'swiper/css';
import "swiper/css/navigation";

const HPSlider = ({acfOptions}) => {

  const HPSlides = acfOptions.slides;
  return(
    <section className={styles.hpSlider}>
      <Container>
        <Row>
          <Col classes="col-xs-12 col-lg-1"></Col>
          <Col classes="col-xs-12 col-lg-10">
            <Swiper navigation={{nextEl: styles.hpSlider__navButton1, prevEl: styles.hpSlider__navButton2}} className={styles.swiperButtonPrev}>
              {
                HPSlides.map(HPSlide => {
                  const slideCategories = HPSlide.slide.categories.nodes;
                  const id = HPSlide.slide.id;
                  const title = HPSlide.slide.title;
                  const date = HPSlide.slide.date;
                  const uri = HPSlide.slide.uri;

                  return(
                    <SwiperSlide key={id}>
                      {title ? <h2>{title}</h2> : null}
                      {date ? <p>{date}</p> : null}
                      {uri ? <a href={uri}>Czytaj więcej</a> : null}
                      {
                        slideCategories.map(slideCategory => {
                          return(
                              <a key={id} href={slideCategory.uri}><p>{slideCategory.name}</p> </a>
                          )
                        })
                      }
                    </SwiperSlide>
                  )
                })
              }
              <div className={styles.hpSlider__navButton1}>test</div>
              <div className={styles.hpSlider__navButton2}>test</div>
            </Swiper>
          </Col>
          <Col classes="col-xs-12 col-lg-1"></Col>
        </Row>
      </Container>
    </section>
  )
}

export default HPSlider;