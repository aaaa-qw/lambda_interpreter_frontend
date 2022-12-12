import postEval from './Network.js';

const handleEvaluate = (expr) => {
    const storage = window.sessionStorage;
    let warning = null;
    let predvars = {};
    
    if(storage == null) {
        warning = "Session storage is disabled, variable definition feature can not be used"
    }
    else {
        predvars = JSON.parse(storage.getItem("predefined_vars"));
    }
    return postEval(expr, 1000, predvars)
        .then(res => {
            if(res.data.result.length !== 0) {
                return (((warning != null) ? <><p style={{padding:'0', margin:'0'}}>{res.data.result}</p><p style={{color:'yellow'}}>Warning: {warning}</p></> : res.data.result));
            }
            else {
                return <p style={{color:'yellow'}}>{"ERROR: ".concat(res.data.errorMessages)}</p>;
            }
        })
        .catch(err => <p style={{color:'red'}}>{"ERROR: ".concat(err)}</p>);

}


const handleNotFound = (command) => {
    return <div>
        <p>Command <span style={{color:'red'}}>{command}</span> not found </p>
        <p>Type <span style={{color:'yellow'}}>help</span> to find out all availabe commands</p>
    </div>
}

const handleShow = () => {
    if(window.sessionStorage == null) {
        return "Please enable session storage in your browser"
    }
    let pred_vars = window.sessionStorage.getItem("predefined_vars");
    if(pred_vars == null) {
        return "Empty"
    }
    let parse_pred_vars = JSON.parse(pred_vars);
    return Object.keys(parse_pred_vars).map((key) => {
        return <p key={key} style={{padding:'0', margin:'0'}}>{key}={parse_pred_vars[key]}</p>
    })
}


const handleDelete = (var_name) => {
    if(window.sessionStorage == null) {
        return "Please enable session storage in your browser"
    }
    let pred_vars = window.sessionStorage.getItem("predefined_vars");
    let parsed_pred_vars = JSON.parse(pred_vars);
    if(pred_vars == null || parsed_pred_vars[var_name] == null) {
        return `No variable named ${var_name}`
    }

    delete parsed_pred_vars[var_name]
    if(Object.keys(parsed_pred_vars).length === 0) {
        window.sessionStorage.removeItem("predefined_vars");
    }
    else {
        window.sessionStorage.setItem("predefined_vars", JSON.stringify(parsed_pred_vars));
    }
    return `Variable '${var_name}' is successfully removed`
}

const handleDefine = (varPlusExpr) => {
    let trimmed = varPlusExpr.trimStart();
    let exprStartPos = trimmed.search(/ /g);
    if(exprStartPos === -1) {
        return <p style={{margin:'0', padding:'0'}}>Missing Argument, USAGE: define [VAR_NAME] [EXPRESSION]</p>
    }
    let varName = trimmed.slice(0, exprStartPos);
    let exprs = trimmed.slice(exprStartPos);
    
    if((/^[a-zA-Z][a-zA-Z0-9]*$/g).test(varName)) {
        const storage = window.sessionStorage;
        if(storage == null) {
            return "Please enable session storage in your browser"
        } 
        let parsed = JSON.parse(storage.getItem("predefined_vars"));

        if(parsed === null || parsed[varName] == null) {
            return postEval(exprs, 1000, parsed).then(res => {
                if(res.data.result.length !== 0) {
                    if(parsed == null) {
                        parsed = {}
                    }
                    parsed[varName] = res.data.result;
                    try {
                        storage.setItem("predefined_vars", JSON.stringify(parsed));
                        return res.data.result;
                    }
                    catch(err) {
                        return <p style={{color:'yellow'}}>{"ERROR: session storage is full"}</p>;                                
                    }
                }
                else {
                    return    <p style={{color:'yellow'}}>{"ERROR: ".concat(res.data.errorMessages)}</p>;
                }
            })
            .catch(err => <p style={{color:'red'}}>{"ERROR: ".concat(err)}</p>);
        }
        else {
            return `Variable ${varName} already defined as ${parsed[varName]}`;
        }

    }
    else {
        return <p style={{margin:'0', padding:'0'}}>Variable Name must be [a-zA-Z][a-zA-Z0-9]*</p>
    }
}

export {handleEvaluate, handleNotFound, handleShow, handleDelete, handleDefine};