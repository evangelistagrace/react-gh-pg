// react app component
import Example from './Example';
import Example2 from './Example2';

const App = () => {

    return (
        <div>
            {/* <h1>Hello World!</h1> */}
            <Example />
            <Example2 onShow={(totalSupport) => alert(totalSupport)}/>
        </div>
    )
}

export default App;