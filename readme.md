# Paralaxer

## Introduction

> A react component that will animate it's nested children based on scroll position

Each child that will be animated will take an animation object containing either a to and from style object, or multiple steps from 0 - 100.

Sample at https://paralaxer.fengel.com/

## Code Samples

```javascript

<Paralaxer start={0} end={4000}>
    <span 
        animation={{
        from:{ transform: 'translateY(-200vh)'}, 
        to:{ transform: 'translateY(0)'},
        }}
        >P</span>
    <span 
        animation={{
        0:{ transform: 'translateY(-150vh)'}, 
        100:{ transform: 'translateY(0)'},
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
```

## Installation

> yarn add or npm install 'paralaxer'