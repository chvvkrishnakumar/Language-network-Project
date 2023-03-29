import {Component} from 'react'

import {FaUserGraduate} from 'react-icons/fa'
import {HiLightBulb} from 'react-icons/hi'
import {TiTick} from 'react-icons/ti'
import Loader from '../Loader'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

class Home extends Component {
  state = {load: true}

  componentDidMount() {
    setTimeout(() => {
      this.timmer()
    }, 2000)
  }

  home = () => (
    <div>
      <Header />
      <div className="main">
        <h1>Learn French online and gain the confidence to speak fluently.</h1>
        <p className="p">
          Learn about all the basics and wonders of the French Language by our
          renowned trainer and get professional guidance with native style
          speaking skills.
        </p>
        <button className="learn-button" type="button">
          Request Brochure
        </button>{' '}
      </div>

      <div className="cards-container4">
        <div>
          <div className="eachCard">
            <img
              src="https://res.cloudinary.com/dk2sgowxz/image/upload/v1680059301/student_1_bdvqp3.png"
              alt="icon"
              className="icon"
            />
            <div>
              <h1 className="small-heading">5000+</h1>
              <p>Happy Learners</p>
            </div>
          </div>
          <div className="eachCard">
            <img
              src="https://res.cloudinary.com/dk2sgowxz/image/upload/v1680059923/bulb_2_yxjfem.png"
              alt="icon"
              className="icon"
            />
            <div>
              <h1 className="small-heading">50000+</h1>
              <p>Hours of enlightenment</p>
            </div>
          </div>
          <div className="eachCard">
            <img
              src="https://res.cloudinary.com/debxyw0pk/image/upload/v1680053097/training_1_nets6l.png"
              alt="icon"
              className="icon"
            />
            <div>
              <h1 className="small-heading">150+</h1>
              <p>Alpha Mentors</p>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img
            className="video"
            src="https://res.cloudinary.com/debxyw0pk/image/upload/v1680053255/image_1_svck7c.png"
            alt="video img"
          />
        </div>
      </div>
      <div className="cards-container2">
        <h3 className="h3-head">
          Gain Mastery on all levels of CEFR (The Common European Framework of
          Reference for Languages: Learning, teaching, assessment): A1, A2, B1,
          B2, C1, C2 of the French Language
        </h3>
        <div className="cards-container">
          <div className="level-card">
            <div className="sub-card1">
              <h4>ABSOLUTE BEGINNER</h4>
              <h1>A1</h1>
            </div>
            <div>
              <p>
                <TiTick /> Use familiar everyday expressions
              </p>
              <p>
                <TiTick /> Introduce yourself and others
              </p>
              <p>
                <TiTick /> Interact in a simple conversation
              </p>
            </div>
          </div>
          <div className="level-card">
            <div className="sub-card2">
              <h4>BEGINNER</h4>
              <h1>A2</h1>
            </div>
            <div>
              <p>
                <TiTick /> Use familiar everyday expressions
              </p>
              <p>
                <TiTick /> Introduce yourself and others
              </p>
              <p>
                <TiTick /> Interact in a simple conversation
              </p>
            </div>
          </div>
          <div className="level-card">
            <div className="sub-card3">
              <h4>INTERMEDIATE</h4>
              <h1>B1</h1>
            </div>
            <div>
              <p>
                <TiTick /> Use familiar everyday expressions
              </p>
              <p>
                <TiTick /> Introduce yourself and others
              </p>
              <p>
                <TiTick /> Interact in a simple conversation
              </p>
            </div>
          </div>
          <div className="level-card">
            <div className="sub-card4">
              <h4>INTERMEDIATE</h4>
              <h1>B2</h1>
            </div>
            <div>
              <p>
                <TiTick /> Use familiar everyday expressions
              </p>
              <p>
                <TiTick /> Introduce yourself and others
              </p>
              <p>
                <TiTick /> Interact in a simple conversation
              </p>
            </div>
          </div>
          <div className="level-card">
            <div className="sub-card5">
              <h4>ADVANCED</h4>
              <h1>C1</h1>
            </div>
            <div>
              <p>
                <TiTick /> Use familiar everyday expressions
              </p>
              <p>
                <TiTick /> Introduce yourself and others
              </p>
              <p>
                <TiTick /> Interact in a simple conversation
              </p>
            </div>
          </div>
        </div>
        <button className="learn-button" type="button">
          Start Learning French Online
        </button>
      </div>
      <div className="french-worth">
        <h1 className="side-h1">Is learning French worth it?</h1>
        <img
          className="large-img"
          src="https://res.cloudinary.com/debxyw0pk/image/upload/v1680062789/All-languages_FRENCH_1_jktg77.png"
          alt="french"
        />
        <p>
          Learning any language is worth your time! Whether it’s French or
          another language, learning a language allows you to connect with
          people from all over the world, experience different cultures and help
          with a bit of brain training all at the same time! We’re living in an
          increasingly globalised world, so learning another language like
          French can help you to boost your career and the likelihood of finding
          a new job, make travelling much easier and it opens you up to a world
          of new entertainment, like music, art, books and films. Trust us, its
          definitely worth it.
        </p>
        <ol type="1">
          <p>
            But outside of that, there are several more top reasons to learn
            French:
          </p>

          <li>
            French is the official language of 29 countries. Open up those
            travel plans, y’all!
          </li>
          <li>
            Learn about new cultures from around the globe: whether it’s
            cooking, fashion, theatre, arts or architecture, French offers
            access to a world of new interests.
          </li>
          <li>
            French is a ‘romance’ language. That means it’ll get you closer to
            learning other languages like Spanish, Italian and Portuguese.
            Bonus!
          </li>
          <li>
            When someone asks “Does anyone here speak French?” in any given
            scenario, you can be the hero they never knew they needed.
          </li>
        </ol>
      </div>
      <div className="french-card">
        <h1>Our French Course Prices</h1>
        <div className="french">
          <div className="level-card">
            <h3>Personal Learning</h3>
            <p>(1 Teacher & 1 Student)</p>
          </div>
          <div className="level-card">
            <h3>Group Learning</h3>
            <p>(1 Teacher & 6 Student)</p>
          </div>
        </div>
        <div className="cards-container">
          <div className="level-card">
            <p className="intro">Introduction to French</p>
            <h2>Level A1</h2>
            <h1 className="cost">$1190</h1>
            <p>Curriculum includes</p>

            <p>
              Basic greetings and introduction, Phonetics, Grammar and
              Vocabulary
            </p>
            <p>View detailed Curriculum</p>
            <button className="learn-button" type="button">
              BUY NOW
            </button>
          </div>
          <div className="level-card">
            <p className="intro">Elementary Knowledge</p>
            <h2>Level A2</h2>
            <h1 className="cost">$1675</h1>
            <p>Curriculum includes</p>

            <p>Simple communications,Grammar and Vacabulary</p>
            <p>View detailed Curriculum</p>
            <button className="learn-button" type="button">
              BUY NOW
            </button>
          </div>

          <div className="level-card">
            <p className="intro">Intermediate Knowledge</p>
            <h2>Level B1</h2>
            <h1 className="cost">$3590</h1>
            <p>Curriculum includes</p>

            <p>
              Cultural & Social know-hows,Complex Grammar and professional
              Vacabulary
            </p>
            <p>View detailed Curriculum</p>
            <button className="learn-button" type="button">
              BUY NOW
            </button>
          </div>
          <div className="level-card">
            <p className="intro">Professional Knowledge</p>
            <h2>Level B2</h2>
            <h1 className="cost">$3890</h1>
            <p>Curriculum includes</p>

            <p>
              Degree of fluent, Express Opinions, Complex Grammar Structures.
            </p>
            <p>View detailed Curriculum</p>
            <button className="learn-button" type="button">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div className="learn-at-any-stage">
        <h1 className="side-h1">Learning French at any age</h1>
        <p>
          You should remember that you can be ANY age and start learning a new
          language! The idea that there’s a cut-off point for language
          acquisition is incredibly common. People think that unless you learned
          a language when you were a child, there’s no hope and it’ll be
          near-impossible to grasp.
        </p>
        <p>
          NEWSFLASH: That’s not the case! Learning French as an adult or young
          adult IS possible. You CAN grasp a language, no matter your age. The
          difference between adults learning and children learning is that
          children are pretty much fearless when it comes to making mistakes.
          Did you know that language anxiety affects around a third of adult
          learners? Because many of us have this fear, there’s a risk we miss
          out on learning key French words and phrases.
        </p>
        <p>
          So whether you’re 5 or 50, you can learn French easily by consistently
          practising! The best way to learn French is to be mindful of the fact
          that languages are about more than just vocabulary and grammar.
          Languages like French are built around people, culture, and
          connection.
        </p>
        <button className="learn-button" type="button">
          Start Learning French Online
        </button>
      </div>
      <div className="discover">
        <h1>Discover what our students have to say</h1>
        <div className="discover-img-container">
          <img
            className="disco-img"
            src="https://res.cloudinary.com/debxyw0pk/image/upload/v1680058359/image_15_hxyewe.png"
            alt="video"
          />
          <img
            className="disco-img"
            src="https://res.cloudinary.com/debxyw0pk/image/upload/v1680058373/image_16_xxb7p7.png"
            alt="video"
          />

          <img
            className="disco-img"
            src="https://res.cloudinary.com/debxyw0pk/image/upload/v1680058431/image_17_vutg9n.png"
            alt="video"
          />
        </div>
      </div>
      <Footer />
    </div>
  )

  timmer = () => {
    this.setState({load: false})
  }

  render() {
    const {load} = this.state

    return load ? <Loader /> : this.home()
  }
}

export default Home
