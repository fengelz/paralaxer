# Paralaxer

## Introduction

> A react component that will animate its nested children based on scroll position. Each child that will be animated will take an animation object containing either a to and from style object, or multiple steps from 0 - 100. The Paralaxer Wrapper takes 2 / 4 arguments start and end, which are absolute values related to the document. or tresholdStart and tresholdEnd which are relative to the Paralaxer wrappers distance from the top of the screen.

Sample at https://paralaxer.fengel.com/

## Code Samples

```javascript

<Paralaxer start={0} end={this.state.docHeight / 1.5}>
  <h1 
  style={{ transformOrigin: 'center'}}
  animation={{
    from:{ transform: 'rotate(360deg) skew(0deg) scale(1)'}, 
    to:{ transform: 'rotate(0deg) skew(0deg) scale(1)'},
  }}>
    <span 
      animation={{
        0:{ transform: 'translateY(0vh)'},
        50:{ transform: 'translateY(-200vh)'}, 
        100:{ transform: 'translateY(0vh)'},
      }}
      >P</span>
    <span 
      animation={{
        0:{ transform: 'translateY(0vh)'},
        50:{ transform: 'translateY(-150vh)'}, 
        100:{ transform: 'translateY(0vh)'},
      }}
      >a</span>
    <span 
      animation={{
        0:{ transform: 'translateY(0vh)'},
        50:{ transform: 'translateY(-100vh)'}, 
        100:{ transform: 'translateY(0vh)'},
      }}
      >r</span>
    <span 
      animation={{
        0:{ transform: 'translateY(0vh)'},
        50:{ transform: 'translateY(-70vh)'}, 
        100:{ transform: 'translateY(0vh)'},
      }}
      >a</span>
    <span 
    animation={{
      0:{ opacity: 1},
      50:{ opacity: 0.5}, 
      100:{ opacity: 1},
    }}
      >l</span>
    <span 
      animation={{
        0:{ transform: 'translateY(0vh)'},
        50:{ transform: 'translateY(70vh)'}, 
        100:{ transform: 'translateY(0vh)'},
      }}
      >a</span>
    <span 
      animation={{
      0:{ transform: 'translateY(0vh)'},
      50:{ transform: 'translateY(100vh)'}, 
      100:{ transform: 'translateY(0vh)'},
    }}
      >x</span>
    <span 
      animation={{
        0:{ transform: 'translateY(0vh)'},
        50:{ transform: 'translateY(150vh)'},
        100:{ transform: 'translateY(0vh)'},
      }}
      >e</span>
    <span 
      animation={{
        0:{ transform: 'translateY(0vh)'},
        50:{ transform: 'translateY(200vh)'}, 
        100:{ transform: 'translateY(0vh)'},
      }}
      >r</span>
  </h1>
</Paralaxer>
```

## Installation

> yarn add or npm install 'paralaxer'