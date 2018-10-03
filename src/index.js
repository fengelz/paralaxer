import React from 'react'

class Paralaxer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()

    this.state = {
      scrollPos: 0,
      scrollArea: { start: 0, end: 300 },
      elements: null,
    }
  }

  componentDidMount() {
    const { top } = this.myRef.current.getBoundingClientRect()
    const scrollArea = {
      start:
        this.props.start === 0
          ? 0
          : this.props.start || top - (this.props.tresholdStart || 0),

      end:
        this.props.end === 0
          ? 0
          : this.props.end || top + (this.props.tresholdEnd || 0),
    }
    // Run through all children and prepare from, to and style values
    const elements = this.recursiveMap(this.props.children, (child) => {
      return this.setupElementDefaults(child)
    })

    this.setState({ scrollArea, elements })
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    this.setState({ scrollPos: document.body.getBoundingClientRect().y })
  }

  setupElementDefaults(el) {
    let anime = {}
    let highestPercent = 0
    if (el.props && el.props.animation) {
      // iterate the from object of the element
      const regEx = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g
      Object.keys(el.props.animation).forEach((key) => {
        let stylePattern = {}
        let start = {}
        const styleObj = el.props.animation[key]
        Object.keys(styleObj).forEach((key, index) => {
          stylePattern[key] = styleObj[key].toString().replace(regEx, '$')
          if (styleObj[key].toString().match(regEx)) {
            start[key] = styleObj[key]
              .toString()
              .match(regEx)
              .map(Number)
          } else {
            start[key] = styleObj[key].toString()
          }
        })
        highestPercent = key === 'from' ? 0 : key === 'to' ? 100 : Number(key)
        anime[highestPercent] = {
          stylePattern,
          start,
          percent: highestPercent,
        }
      })
      if (highestPercent < 100) {
        anime[100] = { ...anime[highestPercent] }
        anime[100].percent = 100
      }
      const returner = React.cloneElement(el, { anime })

      return returner
    }
    return el
  }

  recursiveMap(children, fn) {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }
  
      if (child.props.children) {
        child = React.cloneElement(child, {
          children: this.recursiveMap(child.props.children, fn)
        });
      }
  
      return fn(child);
    });
  }

  calculatePercentageScrolled() {
    const { scrollPos, scrollArea } = this.state

    let scrollTop = scrollArea.start - scrollPos * -1
    const scrollHeight = scrollArea.end - scrollArea.start
    scrollTop = scrollTop > 0 ? 0 : scrollTop

    const percent = (scrollTop / scrollHeight) * 100 * -1

    const percentScrolled = Math.round(
      percent < 0 ? 0 : percent > 100 ? 100 : percent
    )
    return percentScrolled
  }

  getCalculatedStyles(el) {
    if (!el.props.anime) {
      return {}
    }
    const percentScrolled = this.calculatePercentageScrolled()
    let newStyle = {}
    let fromObj = null
    let toObj = null
    for (var percent in el.props.anime) {
      if (percent <= percentScrolled) {
        fromObj = el.props.anime[percent]
      }
      if (percent >= percentScrolled) {
        toObj = el.props.anime[percent]
        break
      }
    }

    for (var key in fromObj.stylePattern) {
      let style = `${fromObj.stylePattern[key]}`
      for (let i = 0; i < fromObj.start[key].length; i++) {
        const from = fromObj.start[key][i]
        const to = toObj.start[key][i]
        let diff = Math.abs(from - to)
        const interval = toObj.percent - fromObj.percent
        const scrolled =
          fromObj.percent > 0
            ? percentScrolled - fromObj.percent
            : percentScrolled

        const interValScrolled = Math.abs((scrolled / interval) * 100 || 0)
        let newPos = 0
        if (from > to) {
          newPos = to + (diff - (interValScrolled / 100) * diff)
        } else {
          newPos = to - (diff - (interValScrolled / 100) * diff)
        }
        style = style.toString().replace('$', newPos)
      }
      newStyle[key] = style
    }
    return newStyle
  }

  renderChildren() {
    return this.recursiveMap(this.state.elements, (child) => {
      return React.cloneElement(child, {
        style: { ...child.props.style, ...this.getCalculatedStyles(child) },
      })
    })
  }

  render() {
    const { start, end, tresholdStart, tresholdEnd, ...other } = this.props
    return (
      <div {...other} ref={this.myRef}>
        {this.renderChildren()}
      </div>
    )
  }
}
export default Paralaxer
