import React, {Component} from 'react';

class SimpleBenchmarks extends Component {
  constructor(props) {
    super(props);

    this.onclick = this.onclick.bind(this);
    this.state = {
      running: false,
      sum_time: null,
      smooth_time: null
    };
  }

  onclick() {
    if (!this.state.running) {
      this.setState({running: true,
                     sum_time: null,
                     smooth_time: null});
      let worker = new Worker('worker.bundle.js');

      worker.addEventListener('message', event => {
        if (event.data === 'done') {
          this.setState({running: false});
          worker.terminate();
        } else {
          this.setState(event.data);
        }
      });
      
      worker.postMessage(this.props.codebase);
    }
  }

  render() {
    let result = null;

    
    return (
      <div style={{width: 400, margin: 'auto', display: 'block'}}>
      <button type="button" onClick={this.onclick}>Run benchmarks {this.props.codebase}
      </button>

      <div style={{float: 'right'}}>
      Running = {this.state.running ? 'true' : 'false'} 
      </div>

      <br></br>
      <div style={{float: 'right'}}>
      Sum = {this.state.sum_time ? this.state.sum_time.toFixed(1) : 'un-run'}
      </div>

      <br></br>
      <div style={{float: 'right'}}>
      Smooth = {this.state.smooth_time ? this.state.smooth_time.toFixed(1): 'un-run'}
      </div>

      <br></br>
      </div>      
    );
  }
}

export {SimpleBenchmarks}
