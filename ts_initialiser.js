(function() {
    // script init
    const TypeScriptExec = document.createElement('script');
    TypeScriptExec.src = 'https://cdn.jsdelivr.net/npm/typescript@latest/lib/typescriptServices.js';
    document.head.appendChild(TypeScriptExec);
})();
// function add
function runTS(code) {
    return eval(ts.transpile(code));
}
