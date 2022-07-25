//tagging the template string using the html function 
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
//the function html takes two arguments in pieces and substitutions
function html(pieces, ...substitutions) {
    let result = pieces[0];
    for(let i=0; i<substitutions.length; i++) {
        result += safe(substitutions[i]) + pieces[i+1];
    }
    return result;
}
//the safe function returns the substitutions by replacing HTML-unsafe characters with safely-escaped HTML rendering of the comment
function safe(str) {
    return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}
