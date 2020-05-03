let React ={
  createElement: (tag, props, ...children) =>{
    if (typeof tag === 'function'){
      return tag(props);
    }
   var element = {tag, props, children }
   console.log(element)
   return element;
  }
}

const app = () => (<div claasName={'react-2020'}>
  <h1>Hello, person</h1>
  <p>Lorem ipsum, dolor sit amet consectetur  </p>
</div>);

const render = (reactElement, container) =>{
  const actualDomElement = document.createElement(reactElement.tag)
  if(reactElement.props){
    Object.keys(reactElement.props).filter(p => 0!== 'children').forEach(p=>actualDomElement[p] = reactElement[p])
  }
  if(reactElement.props.children){
    reactElement.props.children.forEach(child => render(child))
  }

  container.appenChild(actualDomElement)
}

render(<app/>, document.querySelector("#app"))