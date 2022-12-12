import axios from "axios";

const postEval = (expr, maxEval, pred_vars) => {
    return axios.post(
        `https://lambdainterpreterbackend-production.up.railway.app/`, 
        JSON.stringify(
            {
                "expression":expr,
                "predefined_vars":pred_vars,
                "maximum_eval":maxEval
            }
        ), {headers: {
            'content-type':'application/json'
        }}
    );        
}

export default postEval;