export const withbackground = (WrappedComponent) => {
    return () => {
        return (
            <div style={{background: "blue", color: "#fff"}}>
                <WrappedComponent></WrappedComponent>
            </div>
        );
    };
};

const HelloWorld = () =>  {
    return <h1>Hello World</h1>
}
const HOC = withbackground(HelloWorld);
export default HOC;