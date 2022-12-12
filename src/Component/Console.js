import './Console.css';
import Help from './Help.js'
import { ReactTerminal } from "react-terminal";
import { handleShow, handleNotFound, handleDelete, handleEvaluate, handleDefine } from '../Logic/Handlers.js';

const Console = props => {

    const commands = {
        show: handleShow,
        del: handleDelete,
        eval: handleEvaluate,
        define: handleDefine,
        clearall: () => {
            window.sessionStorage?.removeItem("predefined_vars");
            return "All variable definitions are successfully removed";
        },
        help: Help
      };
    

      return (
        <div className="console-wrap">
            <ReactTerminal
            welcomeMessage={<div>
                <p style={{textAlign:'center'}}>Lambda Calculus Interpreter</p>
            </div>}
            commands={commands}
            prompt="&lambda; &gt;"
            theme="dark"
            defaultHandler={handleNotFound}
            />
        </div>
    );
}

export default Console;