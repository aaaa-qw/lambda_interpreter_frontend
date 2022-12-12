function Help () {
    return (    
        <div>
            <p>Available commands:</p>
            <p><span style={{color:'yellow'}}>show</span>: show all variables</p>
            <p><span style={{color:'yellow'}}>help</span>: show help</p>
            <p><span style={{color:'yellow'}}>clear</span>: clear terminal output</p>
            <p><span style={{color:'yellow'}}>clearall</span>: clear all variable definitions</p>
            <p><span style={{color:'yellow'}}>del</span> <span style={{color:'red'}}>[VARIABLE_NAME]</span>: delete <span style={{color:'red'}}>[VARIABLE_NAME]</span> from session storage</p>
            <p><span style={{color:'yellow'}}>eval</span> <span style={{color:'lightgreen'}}>[LAMBDA_EXPRESSION]</span>: evaluate <span style={{color:'lightgreen'}}>[LAMBDA_EXPRESSION]</span> </p>
            <p>
                <span style={{color:'yellow'}}>define</span> <span style={{color:'lightgreen'}}>[VARIABLE_NAME]</span> <span style={{color:'lightgreen'}}>[LAMBDA_EXPRESSION]</span>: 
                    bind <span style={{color:'lightgreen'}}>[VARIABLE_NAME]</span> to <span style={{color:'lightgreen'}}>[LAMBDA_EXPRESSION]</span> </p>
        </div>
    )
}

export default Help;