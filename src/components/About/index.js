import {Component} from 'react'
import {Chrono} from 'react-chrono'

import Header from '../Header'
import Footer from '../Footer'
import Loader from '../Loader'

import './index.css'

const items = [
  {
    cardTitle: 'Once Upon a Idea',
    cardDetailedText:
      'On a breezy afternoon of November 2020, it all started with three friends, Pinnac Yeddy, Siddhi Chokhani, and Shubham Pille coming together because of their love for languages and entrepreneurship. Their main purpose was to improve the education quality and critical pedagogy in students learning a foreign language.They wanted to bring the fun back into innovative learning!',
  },
  {
    cardTitle: 'Our first of many happy learners',
    cardDetailedText:
      'We went global at a very early stage! Our first happy learner to board our learning train was Mr. Anant,a 70-year-old man from Qatar who had a passion to learn French. From then on, there was no turning back! Today, we have more than 5000 students learning with us!',
  },
  {
    cardTitle: 'All aboard the language train!',
    cardDetailedText:
      'In less than six months, we were able to bring more than [no.] students closer to learning their dream language! With a staggering increase of  [no.] in classes, we have made ourselves the most colossal family of language learners in the city!',
  },
  {
    cardTitle: 'Mumbai Dreams',
    cardDetailedText:
      'From remote working to renting an office, to buying our very own office in Chembur, Mumbai, we have come a long way! We have made massive breakthroughs in the EdTech Industry. Our team of 50+ people is taking great strides to make a name for ourself!',
  },
  {
    cardTitle: 'Expanding our Reach',
    cardDetailedText:
      'We have come a long way! But with every mile we reach, we yearn to go further!',
  },
]
class About extends Component {
  state = {load: true}

  componentDidMount() {
    setTimeout(() => {
      this.timmer()
    }, 1000)
  }

  timmer = () => {
    this.setState({load: false})
  }

  about = () => (
    <>
      <Header />
      <div className="bg-main">
        <div className="top-main">
          <div className="para">
            <h1>Learn More Than Just a Language</h1>
            <p>
              Whether learning a foreign language is all about learning new
              cultures are obtaining vast carrier opportunities,we`re your go to
              language academy
            </p>
          </div>
          <div className="imgbg">
            <img
              src="https://res.cloudinary.com/debxyw0pk/image/upload/v1680053255/image_1_svck7c.png"
              alt="vid"
              className="image"
            />
          </div>
        </div>
        <div className="middile">
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
        <h1 className="how">How did we start?</h1>
        <div className="App">
          <div style={{width: '90%', height: '100%'}}>
            <Chrono
              items={items}
              theme={{
                primary: '#58D69D',
                secondary: '#58D69D',
                //   cardBgColor: 'yellow',
                //   titleColor: 'black',
                //   titleColorActive: 'red',
                cardTitleColor: 'black',
              }}
              mode="VERTICAL"
              // slideItemDuration={4000}
              // cardHeight={250}
              // cardWidth={600}
              // fontSizes={{
              //   title: '1.1rem',
              // }}
              // contentDetailsHeight={150}
              fontSizes={{
                cardTitle: '1.5rem',
                cardText: '0.8rem',
              }}
            />
          </div>
        </div>
        <h1 className="how">Our 3 U’s</h1>
        <div className="bottom">
          <p className="king">
            But outside of that, there are several more top reasons to learn
            French:
          </p>
          <div className="questions">
            <p className="circle">1</p>
            <p className="answer">
              French is the official language of 29 countries. Open up those
              travel plans, y’all!
            </p>
          </div>
          <div className="questions">
            <p className="circle">2</p>
            <p className="answer">
              Learn about new cultures from around the globe: whether it’s
              cooking, fashion, theatre, arts or architecture
            </p>
          </div>
          <div className="questions">
            <p className="circle">3</p>
            <p className="answer">
              French is a ‘romance’ language. That means it’ll get you closer to
              learning other languages like Spanish, Italian and Portuguese.
            </p>
          </div>
          <div className="questions">
            <p className="circle">4</p>
            <p className="answer">
              When someone asks “Does anyone here speak French?” in any given
              scenario, you can be the hero they never knew they needed.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )

  render() {
    const {load} = this.state

    return load ? <Loader /> : this.about()
  }
}

export default About
