# Paralaxer

## Introduction

> A react component that will animate it's nested children based on scroll position. Each child that will be animated will take an animation object containing either a to and from style object, or multiple steps from 0 - 100. The Paralaxer Wrapper takes 2 / 4 arguments start and end, which are absolute values related to the document. or tresholdStart and tresholdEnd which are relative to the Paralaxer wrappers distance from the top of the screen.

Sample at https://paralaxer.fengel.com/

## Code Samples

```javascript

<Paralaxer start={0} end={this.state.docHeight / 1.5}>
        <h1 
        style={{ transformOrigin: 'top left'}}
        animation={{
          from:{ transform: 'rotate(-360deg) skew(30deg) scale(3)'}, 
          to:{ transform: 'rotate(0deg) skew(0deg) scale(1)'},
        }}>
        <Paralaxer start={0} end={this.state.docHeight}>
          <span 
              animation={{
                from:{ transform: 'translateY(-200vh)'}, 
                to:{ transform: 'translateY(0)'},
              }}
              >P</span>
            <span 
              animation={{
                from:{ transform: 'translateY(-150vh)'}, 
                to:{ transform: 'translateY(0)'},
              }}
              >a</span>
            <span 
              animation={{
                from:{ transform: 'translateY(-100vh)'}, 
                to:{ transform: 'translateY(0)'},
              }}
              >r</span>
            <span 
              animation={{
                from:{ transform: 'translateY(-70vh)'}, 
                to:{ transform: 'translateY(0)'},
              }}
              >a</span>
            <span 
            animation={{
              from:{ opacity: 0.5}, 
              to:{ opacity: 1},
            }}
              >l</span>
            <span 
              animation={{
                from:{ transform: 'translateY(70vh)'}, 
                to:{ transform: 'translateY(0)'},
              }}
              >a</span>
            <span 
             animation={{
              from:{ transform: 'translateY(100vh)'}, 
              to:{ transform: 'translateY(0)'},
            }}
              >x</span>
            <span 
              animation={{
                from:{ transform: 'translateY(150vh)'},
                to:{ transform: 'translateY(0)'},
              }}
              >e</span>
            <span 
              animation={{
                from:{ transform: 'translateY(200vh)'}, 
                to:{ transform: 'translateY(0)'},
              }}
              >r</span>

            </Paralaxer>
          </h1>
        </Paralaxer>
```

## Installation

> yarn add or npm install 'paralaxer'