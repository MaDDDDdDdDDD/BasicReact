import App from "./App.jsx";
function Apptab(){
    return (
        <>
        <App name1="BMW" price1="45000" model={["<li>R15</li>,<li>R16</li>,"]}/>
        <App name1="Rolls Royal" price1="55000"/>
        <App name1="Benz" price1="35000" />
        </>
        
    );
}
export default Apptab