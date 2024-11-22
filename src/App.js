
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './components/navbar';
import ProfileCover from './components/profilecover';
import ProfileStats from './components/profilestats';
import ProfileInfo from './components/profileInfo';
import NewTweet from './components/newtweet';
import TweetCard from './components/tweetcard';
import RightPanel from './components/rightpanel';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
            following: 1,
            followers: 5000,
            likes: 4000
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleNewTweet = this.handleNewTweet.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/tweets')
            .then(response => {
                this.setState({ tweets: response.data });
            })
            .catch(error => {
                console.error('There was an error fetching the tweets!', error);
            });
    }

    handleDelete(tweetID) {
        axios.delete(`http://localhost:5000/tweets/${tweetID}`)
            .then(response => {
                this.setState(prevState => ({
                    tweets: prevState.tweets.filter(tweet => tweet._id !== tweetID)
                }));
            })
            .catch(error => {
                console.error('There was an error deleting the tweet!', error);
            });
    }

    handleNewTweet(newTweetContent) {
        const newTweet = {
            user: { name: "Baibhav Shrestha", username: "baibhav" },
            content: newTweetContent,
            date: new Date().toLocaleDateString("en-US", { day: 'numeric', month: 'long' }),
            replies: 0,
            retweets: 0,
            likes: 0
        };

        axios.post('http://localhost:5000/tweets', newTweet)
            .then(response => {
                this.setState(prevState => ({
                    tweets: [...prevState.tweets, response.data]
                }));
            })
            .catch(error => {
                console.error('There was an error posting the tweet!', error);
            });
    }

    render() {
        return (
            <div className="navb">
                <Container>
                    <Navbar />
                </Container>
                <Container style={{ height: '40vh' }}>
                    <ProfileCover />
                </Container>
                <Container>
                    <ProfileStats tweetsCount={this.state.tweets.length} following={this.state.following} followers={this.state.followers} likes={this.state.likes} />
                </Container>
                <Container>
                    <Row>
                        <Col xs={12} md={4} style={{ maxWidth: '30%' }}>
                            <ProfileInfo />
                        </Col>
                        <Col xs={12} md={4} style={{ maxWidth: '40%' }}>
                            <NewTweet onNewTweet={this.handleNewTweet} />
                            {this.state.tweets.map(tweet => (
                                tweet.user ? (
                                    <TweetCard
                                        key={tweet._id}
                                        name={tweet.user.name}
                                        username={tweet.user.username}
                                        date={tweet.date}
                                        tweetDesc={tweet.content}
                                        replies={tweet.replies}
                                        retweets={tweet.retweets}
                                        likes={tweet.likes}
                                        onDelete={this.handleDelete}
                                        id={tweet._id}
                                    />
                                ) : (
                                    <div key={tweet._id}></div>
                                )
                            ))}
                        </Col>
                        <Col xs={12} md={4}>
                            <RightPanel />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
