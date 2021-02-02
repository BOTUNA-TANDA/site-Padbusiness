import React, { useEffect } from "react"
import styled, { withTheme } from "styled-components"
import Text from "../../components/Text"
import { motion, useAnimation } from "framer-motion"
import { breakPoints } from "../../app-config"
import aboutBg from "../../images/spaces-decoration.png"
import ServiceItemTest from "../../components/ServiceItemTest"
import parse from "html-react-parser"
import { useInView } from "react-intersection-observer"
import { containerAnim, fadeInUp } from "../../animation"

const servicesLeft = [
  {
    title: " ",
    text:
      '<p>2.1.<span class="bold"> PAD business met </span> en réseau ses membres avec des investisseurs et sponsors potentiels.</p>',
  },
  {
    title: " ",
    text:
      "2.2. <span class='bold'> La sensibilisation et la formation </span> à l'entreprenariat via tous les canaux de communication traditionnelles et digitales",
  },
  {
    title: " ",
    text:
      "2.3. La dispense des ateliers juridiques, sociales,  culturelles (langues, art, écriture, etc).",
  },
  {
    title: " ",
    text:
      "2.4. école de devoirs pour les jeunes et adultes.",
  },
  {
    title: " ",
    text:
      "2.5. <span class='bold'>Le financement des projets </span> de nos membres grâce à nos sponsors et bailleurs des fonds.",
  },
  {
    title: " ",
    text:
      "2.6. La création d'une plateform <span class='bold'> “each one, teach one” </span> pour le mentoring, afin d'aider les jeunes à s'identifier aux personnes ayant réussies dans leurs affaires.",
  },
]


const Activity = props => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    rootMargin: "-100px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("animate")
    }
  }, [animation, inView])

  return (
    <Container
      ref={contentRef}
      animate={animation}
      initial="initial"
      variants={containerAnim}
    >
      
      <div className="">
        <div>
          {servicesLeft.map(object => {
            return (
              <ServiceItemTest service={object} />            )
          })}
        </div>
      </div>
    </Container>
  )
}

export default withTheme(Activity)

//-------------------------------------------
const Container = styled(motion.div)`
/*   overflow-x: hidden;
  padding-top: 100px;
  position: relative;
  padding-bottom: 100px;
  background: ${props => props.theme.grey};
  .imgWrapper {
    overflow: hidden;
  }
  .about-decoration-bg {
    width: 1500px;
    position: absolute;
    z-index: -1;
    right: 0;
  }
  .space-content {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 32px;
    
  }
  .bold {
    font-weight: 700;
  } */
  
`

const ServiceListItem = styled(motion.div)`
/*   margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap:50px;
  grid-column-gap:50px;
 */
 
`

