import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponent() {
    // let message;
    const display = false;
    // if(display) {
    //     message = <h1>This is message one</h1>;
    // } else {
    //     message = <h2>This is another message</h2>;
    // }
    // return message;

    return display ? <Welcome /> : <Code />;
}