react-fb-player
=============================

This is a modified fork of [react-youtube](https://github.com/fmedinac/react-facebook-player) with new features

## Installation

```
$ npm install react-fb-player --save
```

## Usage

```js
const FacebookPlayer = require('react-fb-player');

<FacebookPlayer
  appId={ string }    // (required) Your Facebook App ID. Ref: http://bit.ly/1GNA0AN
  videoId={ string }  // (required) Video´s ID Ref: http://bit.ly/1ysgVu4
  id={ string }   // Element ID. Required if you wanna use more than one video in the same page.
  className={ string }   // Element class.
  allowfullscreen={ boolean }
  autoplay={ boolean }
  width={ number }
  showText={ boolean }
  showCaptions={ boolean }
  onReady={ function } // Returns a player object to be used for controlling
  onStartedPlaying={ function }
  onPaused={ function }
  onFinishedPlaying={ function }
  onStartedBuffering={ function }
  onFinishedBuffering={ function }
  onError={ function }
  />
```

You can use onReady() to assign the player to a state and then control it (http://bit.ly/29Oxmgm).

```js
import React from 'react';
import FacebookPlayer from 'react-fb-player';

export default class FBVideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      player: null
    };
  }

  onReady = (id, player) => {
   this.setState({
     player: player,
   });
 }

  playVideo = () => {
    const { player } = this.state;
    if (player) player.play();
  };

  pauseVideo = () => {
    const { player } = this.state;
    if (player) player.pause();
  };

  render() {
    return (
      <div className="FBVideoPlayer">
        {this.props.appId ? (
          <div>
            <FacebookPlayer
              appId={`${this.props.appId ? this.props.appId : 'Default'}`}
              videoId={`${this.props.videoId ? this.props.videoId : 'Default'}`}
              id={`${this.props.id ? this.props.id : 'FBVideoPlayer'}`}
              className={this.props.className}
              allowfullscreen={this.props.allowfullscreen}
              autoplay={this.props.autoplay}
              width={this.props.width ? this.props.width : 600}
              showText={this.props.showText}
              showCaptions={this.props.showCaptions}
              onReady={ this.onReady }
              onStartedPlaying={this.props.onStartedPlaying}
              onPaused={this.props.onPaused}
              onFinishedPlaying={this.props.onFinishedPlaying}
              onStartedBuffering={this.props.onStartedBuffering}
              onFinishedBuffering={this.props.onStartedBuffering}
              onError={this.props.onError}
            />
            <button onClick={ this.playVideo }>Play</button>
             <button onClick={ this.pauseVideo }>Pause</button>
          </div>
        ) : (
          <div className="content">
            <div className="err-msg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2000px-F_icon.svg.png" />
              <span>Facebook Video Player</span>
              <h3>Sorry, you need define (appId, videoId, and width)</h3>
            </div>
            <div className="code-snippet">
              <pre>
                <span>{'<FBVideoPlayer appId="yourAppId" videoId="yourVideoId" width={numberOfPixels}/>'}</span>
              </pre>
            </div>
          </div>
        )}
      </div>
    );
  }
}

```

# License

  ISC
